import React, { useEffect, useState, useRef } from 'react'; 
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar'; 

export const Feedback = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { analysis } = location.state || {};

  const [animatedScoreWidth, setAnimatedScoreWidth] = useState(0);
  const [displayedScore, setDisplayedScore] = useState(0);

  const animationFrameRef = useRef(null); 

  useEffect(() => {
    if (!analysis) {
      navigate('/');
    } else {
      // Animate the score bar
      const barAnimationTimer = setTimeout(() => {
        setAnimatedScoreWidth(analysis.score);
      }, 100); 

      const start = Date.now();
      const duration = 700;

      const animateScore = () => {
        const elapsed = Date.now() - start;
        const progress = Math.min(elapsed / duration, 1); 
        const currentScore = Math.floor(progress * analysis.score);
        setDisplayedScore(currentScore);

        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(animateScore);
        }
      };

      animationFrameRef.current = requestAnimationFrame(animateScore);

      return () => {
        clearTimeout(barAnimationTimer);
        cancelAnimationFrame(animationFrameRef.current);
      };
    }
  }, [analysis, navigate]);

  if (!analysis) {
    return null;
  }

  const { score, summary, strengths, weaknesses, tips_for_improvement } = analysis;

  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-gray-100 font-sans">
      <Navbar />

      <div className="flex-grow  sm:px-8 md:px-16 lg:px-24 xl:px-32 py-4 md:py-8 lg:py-12">
        <div className="w-full  shadow-xl rounded-2xl p-6 sm:p-10 my-8 ">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-10 text-blue-400 drop-shadow-lg tracking-tight">
            Your Resume Analysis
          </h2>

          <div className="flex justify-center  ">
            <div className="w-screen p-5 bg-gray-800 rounded-xl shadow-lg border border-gray-700">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-200 flex items-center  border-b border-gray-600 pb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8 mr-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                AI Feedback:
              </h3>

              {score !== undefined && (
                <div className="mt-4 mb-6 bg-gray-700 p-4 rounded-2xl border border-gray-600 flex flex-col items-center justify-center shadow-inner">
                  <p className="text-sm lg:text-3xl md:text-2xl sm:text-2xl font-semibold text-gray-200 mb-4">Resume Score:</p>
                  <span className="text-blue-400 text-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-wide">
                    {displayedScore}/100
                  </span>
                  <div className="w-full bg-gray-600 rounded-full h-6 mt-6 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-green-500 to-emerald-400 h-full rounded-full shadow-xl transition-all duration-700 ease-out"
                      style={{ width: `${animatedScoreWidth}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {summary && (
                <div className="mb-6 bg-gray-700 p-5 rounded-lg border border-gray-600">
                  <h4 className="font-bold text-lg sm:text-xl text-sky-300 mb-3 border-b border-gray-600 pb-2">Summary:</h4>
                  <p className="text-gray-300 leading-relaxed  text-xs sm:text-lg">{summary}</p>
                </div>
              )}

              {strengths && strengths.length > 0 && (
                <div className="mb-6 bg-gray-700 p-5 rounded-lg border border-gray-600">
                  <h4 className="font-bold text-lg sm:text-xl text-green-300 mb-3 border-b border-gray-600 pb-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Strengths:
                  </h4>
                  <ul className="list-none space-y-2 text-green-300 text-xs sm:text-lg">
                    {strengths.map((strength, index) => (
                      <li key={`strength-${index}`} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 sm:h-5 w-5 mr-2 mt-1 flex-shrink-0 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {weaknesses && weaknesses.length > 0 && (
                <div className="mb-6 bg-gray-700 p-5 rounded-lg border border-gray-600">
                  <h4 className="font-bold text-lg sm:text-xl text-red-300 mb-3 border-b border-gray-600 pb-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Weaknesses:
                  </h4>
                  <ul className="list-none space-y-2 text-red-300 text-xs sm:text-lg">
                    {weaknesses.map((weakness, index) => (
                      <li key={`weakness-${index}`} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 sm:h-5 mr-2 mt-1 flex-shrink-0 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span>{weakness}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {tips_for_improvement && tips_for_improvement.length > 0 && (
                <div className="bg-gray-700 p-5 rounded-lg border border-gray-600">
                  <h4 className="font-bold text-lg sm:text-xl text-purple-300 mb-3 border-b border-gray-600 pb-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Tips for Improvement:
                  </h4>
                  <ul className="list-none space-y-2 text-purple-300 text-xs sm:text-lg">
                    {tips_for_improvement.map((tip, index) => (
                      <li key={`tip-${index}`} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 sm:h-5 w-5 mr-2 mt-1 flex-shrink-0 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 21h.01M12 3v1m0 16v1m9-9h1M3 12H2M18.364 5.636l-.707-.707M6.343 17.657l-.707.707M16.95 18.364l.707.707M7.05 5.636l-.707-.707M8 9l3 3-3 3m5-3h.01" />
                        </svg>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => navigate('/Upload')}
              className="px-10 py-4 bg-indigo-600 text-white font-bold rounded-lg shadow-xl hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-300 ease-in-out text-xl transform hover:scale-105 active:scale-95"
            >
              Analyze Another Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};