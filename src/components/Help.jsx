import React from 'react';

export default function Help() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 lg:px-20">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-10">
        <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">
          Getting Started with Google Gemini API
        </h1>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed text-justify">
          To use our Resume Analyzer app with your own Gemini (Google AI) API key, follow the steps below.
          Google provides a free quota, so you can start testing your resume instantly without any payment.
        </p>

        <div className="space-y-6 text-gray-700">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">🔹 Step 1: Go to Google AI Studio</h2>
            <p>
              Visit the official Google AI Studio website here:{" "}
              <a
                href="https://aistudio.google.com/app/apikey"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                aistudio.google.com/app/apikey
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">🔹 Step 2: Sign in with your Google Account</h2>
            <p>
              Use your regular Gmail or Google Workspace account to sign in.
              You’ll be asked to accept terms and enable the Gemini API access.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">🔹 Step 3: Create Your API Key</h2>
            <p>
              Once signed in, click the <strong>"Create API Key"</strong> button. A secure API key will be generated.
              Copy it and save it in a secure location. You'll need it for your project.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">🔹 Step 4: Add the Key to Your Project</h2>
            <p>
              Replace the sample key in the code with your actual key in your React app:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mt-2">
{`const API_KEY = 'YOUR_API_KEY_HERE';`}
            </pre>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">🔹 Step 5: Enjoy Free Usage</h2>
            <p>
              Google provides free usage limits (typically ~60 requests/minute and some daily credits).
              Be sure to check your quota on the <a
                href="https://aistudio.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >AI Studio dashboard</a>.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">💡 Tips for API Key Security</h3>
          <ul className="list-disc list-inside text-gray-600 max-w-2xl mx-auto text-left space-y-1">
            <li>Never share your key publicly (like in GitHub repos).</li>
            <li>Restrict your API key in Google Cloud Console if needed.</li>
            <li>Use environment variables in production.</li>
          </ul>
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-600">
            If you face any issues, feel free to reach out through our <a href="/contact" className="text-blue-600 underline">Contact Page</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
