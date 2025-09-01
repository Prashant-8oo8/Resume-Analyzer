import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ApiKeyModal from './ApiKeyModel'; // Ensure this modal component exists

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showApiModal, setShowApiModal] = useState(false); // State to control modal visibility
  const navigate = useNavigate();

  // Handle saving the API key and redirecting
  const handleSaveApiKey = () => {
   
    navigate('/analyzer'); // Redirect to analyzer after saving key
  };

  return (
    <>
      <div className="bg-white text-gray-800">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-100 via-white to-blue-50 py-20 px-6 md:px-16">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-6">
                Boost Your Career with Our <span className="text-blue-600">AI-Powered</span> Resume Analyzer
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Instantly evaluate your resume for ATS (Applicant Tracking System) compatibility, missing keywords, formatting tips, and more — powered by advanced AI.
              </p>
              <Link to="/analyzer">
                <button
                  onClick={() => handleSaveApiKey} // Open modal when clicked
                  className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-700 transition"
                >
                  Try It Now
                </button>
              </Link>
            </div>
            <div className="flex-1">
              <img
                src="https://www.jobhero.com/resources/wp-content/uploads/2024/09/Hero-Graphic.png" // Replace with your actual image
                alt="Resume Analyzer"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6 md:px-16 bg-gray-50">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Use Our Resume Analyzer?</h2>
            <p className="text-gray-600 text-lg">
              Our tool helps your resume stand out in front of recruiters and automated systems.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { title: 'ATS Scoring', desc: 'Get a score from 0 to 100 showing how optimized your resume is for ATS.' },
              { title: 'Keyword Detection', desc: 'Identify missing keywords required by the job description.' },
              { title: 'Formatting Feedback', desc: 'Improve structure, clarity, and readability of your resume.' },
              { title: 'Real-Time Chat Analysis', desc: 'Interact with a smart AI that reviews and advises on your resume.' },
              { title: 'Data Privacy', desc: 'Your data is never stored. We value your privacy and security.' },
              { title: 'Completely Free', desc: 'No signups. No cost. Just better resumes.' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-6 md:px-16 bg-white">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800">How It Works</h2>
          </div>
          <div className="grid gap-12 md:grid-cols-3 max-w-6xl mx-auto">
            {[
              {
                step: '1',
                title: 'Upload Resume',
                desc: 'Upload your resume in PDF format to extract its content for analysis.',
              },
              {
                step: '2',
                title: 'Paste Job Description',
                desc: 'Provide the job description you’re targeting to match against your resume.',
              },
              {
                step: '3',
                title: 'Get AI Analysis',
                desc: 'Our AI scores your resume, highlights missing keywords, and suggests improvements.',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="text-center border-l-4 border-blue-600 pl-6 py-6 bg-gray-50 rounded-lg shadow"
              >
                <h3 className="text-2xl font-bold text-blue-600 mb-2">Step {item.step}</h3>
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white py-16 px-6 md:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Resume?</h2>
            <p className="text-lg mb-6">
              Upload your resume now and get instant feedback tailored to your dream job.
            </p>
            <Link to="/analyzer">
              <button
                // Open modal when clicked
                onClick={() => handleSaveApiKey}
                className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition"
              >
                Get Started
              </button>
            </Link>
          </div>
        </section>
      </div>

     
      
    </>
  );
};

export default Home;
