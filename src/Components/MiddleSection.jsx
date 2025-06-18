import React from 'react';
import logo from "../Assests/image2.jpg";
 
const FeaturesSection = () => {
  return (
    <section id="about" className="bg-white dark:bg-gray-900 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 lg:space-y-32">

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 flex justify-center">
            <img
              src={logo} 
              alt="Resume Skills Analysis"
              className="rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500 ease-in-out"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/500x350/E0F2FE/1E40AF?text=Image+Not+Found"; }}
            />
          </div>

          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-4">
              <span className="text-blue-600">RESUME OPTIMIZATION</span>
            </h2>
            <h3 className="text-3xl font-bold text-gray-700 dark:text-gray-200 mb-6">
              See your missing skills
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              ResumeChecker matches hard skills, soft skills, and keywords from the job listing to your
              resume. Our AI-powered system will show you how to tailor your resume so that you
              highlight the skills and experience recruiters are searching for.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;