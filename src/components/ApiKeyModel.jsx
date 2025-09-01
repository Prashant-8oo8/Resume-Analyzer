import React, { useState } from 'react';

const ApiKeyModal = ({ isOpen, onClose, onSave }) => {
  const [apiKey, setApiKey] = useState(''); // Store user input for API key
  const [error, setError] = useState(''); // Track error messages for validation

  if (!isOpen) return null; // If modal is not open, don't render

  // Function to validate the API key
  const validateApiKey = (key) => {
    // Check if the API key is not empty
    if (!key.trim()) {
      return "API key cannot be empty.";
    }

    // Gemini API key format might be something like: "AIzaSy..." or "some-random-pattern"
    // Allow alphanumeric characters, dashes, underscores, and check for length.
    const apiKeyPattern = /^[a-zA-Z0-9-_]{39,}$/; // Adjusted for possible dashes, underscores, and minimum length

    if (!apiKeyPattern.test(key)) {
      return "API key format is invalid. It should be alphanumeric, and may include dashes or underscores.";
    }

    // If the key is valid
    return '';
  };

  // Handle the save button click
  const handleSave = () => {
    const validationError = validateApiKey(apiKey); // Validate API key
    if (validationError) {
      setError(validationError); // Set the error message
      return;
    }
    onSave(apiKey); // Pass the valid API key to the parent component (App)
    onClose(); // Close the modal after saving
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl p-6 max-w-md w-full animate-fadeIn">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
          🔐 Enter Your Gemini API Key
        </h2>
        <p className="text-sm text-gray-600 mb-4 text-center">
          You can generate a free key from{' '}
          <a
            href="https://aistudio.google.com/app/apikey"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Google AI Studio
          </a>.
        </p>

        {/* Input for API Key */}
        <input
          type="text"
          value={apiKey}
          onChange={(e) => {
            setApiKey(e.target.value); // Update API key state
            setError(''); // Reset error message while typing
          }}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Paste your Gemini API key here..."
        />

        {/* Display error message if validation fails */}
        {error && (
          <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
        )}

        <div className="flex justify-end mt-6 space-x-3">
          {/* Cancel button */}
          <button
            onClick={onClose} // Close the modal when cancel is clicked
            className="px-4 py-2 rounded-md text-gray-600 hover:text-gray-800 transition"
          >
            Cancel
          </button>
          
          {/* Save button */}
          <button
            onClick={handleSave} // Save the API key if valid
            className="px-5 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Save Key
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApiKeyModal;
