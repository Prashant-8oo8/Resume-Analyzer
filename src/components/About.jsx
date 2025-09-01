import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 lg:px-20">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-10">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-6 text-center">
          About Resume Analyzer
        </h1>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed text-justify">
          <strong>Resume Analyzer</strong> is your AI-powered assistant to help you stand out in the job market.
          We use cutting-edge technology to evaluate your resume against job descriptions,
          giving you real-time feedback to improve your chances of passing Applicant Tracking Systems (ATS).
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">🎯 Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              We aim to simplify the resume-building process by using AI to analyze, score,
              and provide suggestions that make your resume more attractive to hiring systems and recruiters.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">⚙️ How It Works</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Upload your resume (PDF format).</li>
              <li>Paste the job description you're targeting.</li>
              <li>Get an instant ATS compatibility score and keyword suggestions.</li>
              <li>Improve your resume based on AI-driven feedback.</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Why Choose Us?</h3>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Because your first impression matters. With Resume Analyzer, you get fast, accurate,
            and actionable insights tailored specifically for the roles you're applying for.
            Say goodbye to guesswork and hello to better interviews.
          </p>
        </div>
      </div>
    </div>
  );
}
