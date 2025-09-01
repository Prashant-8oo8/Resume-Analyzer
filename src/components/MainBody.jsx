import React, { useState, useEffect } from 'react';
import usePdfToText from '../hooks/pdfToText';
import ChatBox from './ChatBox';

const MainBody = () => {
  const { text, extractText } = usePdfToText();
  const [jobDescription, setJobDescription] = useState('');
  const [fileName, setFileName] = useState('');
  const [submittedData, setSubmittedData] = useState(null); // Will be passed to ChatBox after submit
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState(false); // State to handle modal visibility
  const [apiKey, setApiKey] = useState(''); // State to store the API key entered by the user
  const [isFileProcessing, setIsFileProcessing] = useState(false); // State to track file processing status

  // Run the modal only if there's no apiKey stored
  useEffect(() => {
    if (submittedData && !apiKey.trim()) {
      setIsApiKeyModalOpen(true); // Open the modal if there's data but no API key
    }
  }, [submittedData, apiKey]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type !== 'application/pdf') {
      alert("Please upload a valid PDF file.");
      return;
    }

    setIsFileProcessing(true);
    extractText(file).finally(() => {
      setIsFileProcessing(false);
    });
    setFileName(file ? file.name : '');
  };

  const handleSubmit = () => {
    if (!text || !jobDescription.trim()) {
      alert("Please upload a resume and paste the job description.");
      return;
    }

    let reply = text;

    // Remove markdown code block markers
    if (reply.startsWith("```html")) {
      reply = reply.replace(/^```html/, '').replace(/```$/, '').trim();
    } else if (reply.startsWith("```")) {
      reply = reply.replace(/^```/, '').replace(/```$/, '').trim();
    }

    // Open the modal to request the API key
    setSubmittedData({
      textable: reply,
      jobDiscription: jobDescription,
    });
  };

  const handleApiKeySubmit = () => {
    if (!apiKey.trim()) {
      alert("Please enter your Google Gemini API Key.");
      return;
    }

    // Close the modal after submitting the key
    setIsApiKeyModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-gray-200 px-6 py-10 flex flex-col md:flex-row gap-10">
      {/* Left section: Form */}
      <div className="w-full md:w-1/2 space-y-6 bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800">ATS Resume Scorer</h2>

        {/* Job Description Textarea */}
        <div>
          <label className="block mb-2 text-gray-700 font-medium">Paste Job Description</label>
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            className="w-full h-40 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            placeholder="Paste the job description here..."
          />
        </div>

        {/* Resume File Upload */}
        <div>
          <label className="block mb-2 text-gray-700 font-medium">Upload Your Resume (PDF)</label>
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
          />
          {fileName && <p className="text-sm text-green-600 mt-1">Uploaded: {fileName}</p>}
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          disabled={isFileProcessing || !text || !jobDescription.trim()}
        >
          Submit
        </button>
      </div>

      {/* Right section: Chatbox (only after submit) */}
      <div className="w-full md:w-1/2">
        {submittedData ? (
          <ChatBox
            key={submittedData.textable + submittedData.jobDiscription}
            textable={submittedData.textable}
            jobDiscription={submittedData.jobDiscription}
            googleKey={apiKey} // Pass API key to ChatBox
          />
        ) : (
          <div className="text-gray-500 italic">
            Fill out the form and click <strong>Submit</strong> to begin analysis.
          </div>
        )}
      </div>

      {/* Modal for API Key Input */}
      {isApiKeyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-sm w-full">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Enter Your Google Gemini API Key</h3>
            <input
              type="text"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Paste your API key here"
            />
            <div className="flex justify-end mt-6 space-x-3">
              <button
                onClick={() => setIsApiKeyModalOpen(false)}
                className="px-4 py-2 rounded-md text-gray-600 hover:text-gray-800 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleApiKeySubmit}
                className="px-5 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Save Key
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainBody;
