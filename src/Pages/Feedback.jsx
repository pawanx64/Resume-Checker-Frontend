// frontend/src/components/Feedback.jsx
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';

export const Feedback = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { analysis, fileUrl, fileName, fileType } = location.state || {};

  useEffect(() => {
    if (!analysis || !fileUrl) {
      navigate('/');
    }
    return () => {
      if (fileUrl) {
        URL.revokeObjectURL(fileUrl);
      }
    };
  }, [analysis, fileUrl, navigate]);

  if (!analysis || !fileUrl) {
    return null;
  }

  const { score, summary, strengths, weaknesses, tips_for_improvement } = analysis;

  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-gray-100">
      <Navbar />

      <div className="flex-grow p-3 md:p-6 lg:p-8"> {/* Reduced padding */}
        <div className="w-full max-w-6xl mx-auto bg-gray-900 shadow-xl rounded-lg p-5 sm:p-6 my-4 border border-gray-800"> {/* Reduced max-width, padding, and shadow */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center mb-5 text-blue-400 drop-shadow-sm"> {/* Smaller heading */}
            Your Resume Analysis
          </h2>

          <div className="flex flex-col lg:flex-row gap-5 lg:gap-6"> {/* Reduced gap */}
            {/* Left Column: Resume Viewer */}
            <div className="flex-1 lg:w-1/2 p-3 bg-gray-800 rounded-md shadow-md border border-gray-700 overflow-hidden"> {/* Reduced padding, shadow, border radius */}
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-200 flex items-center"> {/* Smaller heading */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Resume: <span className="ml-2 text-blue-300 text-sm sm:text-base truncate">{fileName}</span> {/* Smaller text for file name */}
              </h3>
              <div className="border border-gray-600 rounded-sm overflow-hidden bg-gray-900" style={{ height: '55vh' }}> {/* Reduced height, smaller border radius */}
                {fileType === 'application/pdf' ? (
                  <iframe
                    src={fileUrl}
                    title="Resume Viewer"
                    className="w-full h-full"
                    style={{ border: 'none' }}
                  >
                    <p className="p-3 text-gray-400 text-xs sm:text-sm">Your browser does not support PDFs. Download <a href={fileUrl} download className="text-blue-400 hover:underline">here</a>.</p> {/* Smaller text */}
                  </iframe>
                ) : fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ? (
                  <div className="p-3 text-center text-gray-300 h-full flex flex-col items-center justify-center bg-gray-850">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10 text-blue-400 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p className="text-base sm:text-lg font-semibold mb-1">DOCX not displayable.</p> {/* Smaller text */}
                    <p className="mt-1 text-xs sm:text-sm">Please <a href={fileUrl} download className="text-blue-400 hover:underline font-bold">download</a> to view.</p> {/* Smaller text */}
                  </div>
                ) : (
                  <div className="p-3 text-center text-gray-300 h-full flex flex-col items-center justify-center bg-gray-850">
                    <p className="text-base sm:text-lg font-semibold mb-1">Unsupported file type.</p>
                    <p className="mt-1 text-xs sm:text-sm">Please <a href={fileUrl} download className="text-blue-400 hover:underline font-bold">download</a> to view.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Feedback */}
            <div className="flex-1 lg:w-1/2 p-3 bg-gray-800 rounded-md shadow-md border border-gray-700"> {/* Reduced padding, shadow, border radius */}
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-200 flex items-center"> {/* Smaller heading */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                AI Feedback:
              </h3>

              {score !== undefined && (
                <div className="mb-3 bg-gray-700 p-3 rounded-md border border-gray-600 flex flex-col items-center justify-center"> {/* Reduced padding, margin-bottom */}
                  <p className="text-base sm:text-lg font-semibold text-gray-200 mb-1">Resume Score:</p> {/* Smaller text */}
                  <span className="text-blue-400 text-4xl sm:text-5xl font-extrabold">{score}/100</span> {/* Smaller score */}
                  <div className="w-full bg-gray-600 rounded-full h-3 mt-3"> {/* Thinner progress bar */}
                    <div
                      className="bg-gradient-to-r from-green-500 to-emerald-400 h-3 rounded-full shadow-sm transition-all duration-700 ease-out"
                      style={{ width: `${score}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {summary && (
                <div className="mb-3 bg-gray-700 p-3 rounded-md border border-gray-600"> {/* Reduced padding, margin-bottom */}
                  <h4 className="font-semibold text-sm sm:text-base text-gray-200 mb-1 border-b border-gray-600 pb-0.5">Summary:</h4> {/* Smaller text, thinner border */}
                  <p className="text-gray-300 leading-snug text-xs sm:text-sm">{summary}</p> {/* Smaller text, tighter line height */}
                </div>
              )}

              {strengths && strengths.length > 0 && (
                <div className="mb-3 bg-gray-700 p-3 rounded-md border border-gray-600">
                  <h4 className="font-semibold text-sm sm:text-base text-gray-200 mb-1 border-b border-gray-600 pb-0.5">Strengths:</h4>
                  <ul className="list-disc list-inside text-green-300 space-y-0.5 text-xs sm:text-sm"> {/* Reduced space-y, smaller text */}
                    {strengths.map((strength, index) => (
                      <li key={`strength-${index}`}>{strength}</li>
                    ))}
                  </ul>
                </div>
              )}

              {weaknesses && weaknesses.length > 0 && (
                <div className="mb-3 bg-gray-700 p-3 rounded-md border border-gray-600">
                  <h4 className="font-semibold text-sm sm:text-base text-gray-200 mb-1 border-b border-gray-600 pb-0.5">Weaknesses:</h4>
                  <ul className="list-disc list-inside text-red-300 space-y-0.5 text-xs sm:text-sm">
                    {weaknesses.map((weakness, index) => (
                      <li key={`weakness-${index}`}>{weakness}</li>
                    ))}
                  </ul>
                </div>
              )}

              {tips_for_improvement && tips_for_improvement.length > 0 && (
                <div className="bg-gray-700 p-3 rounded-md border border-gray-600">
                  <h4 className="font-semibold text-sm sm:text-base text-gray-200 mb-1 border-b border-gray-600 pb-0.5">Tips for Improvement:</h4>
                  <ul className="list-disc list-inside text-purple-300 space-y-0.5 text-xs sm:text-sm">
                    {tips_for_improvement.map((tip, index) => (
                      <li key={`tip-${index}`}>{tip}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="text-center mt-6"> {/* Reduced margin-top */}
            <button
              onClick={() => navigate('/')}
              className="px-6 py-2 bg-indigo-600 text-white font-bold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition duration-300 ease-in-out text-base transform hover:scale-105"
            >
              Analyze Another Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};