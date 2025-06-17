import React from 'react';
import logo from "../Assests/image1.jpg";
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  const handleGoToUpload = () => {
    navigate('Upload');
  }
  return (
    // Hero section container with responsive padding and a subtle gradient background
    // py-16, md:py-24, lg:py-44 ensure vertical spacing adapts to screen size
    <section id="upload" className="relative bg-gradient-to-br from-indigo-500 to-purple-600 text-white py-16 md:py-24 lg:py-44 overflow-hidden">
      {/* Background overlay for visual effect */}
      <div className="absolute inset-0 bg-black opacity-20 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 
                      flex flex-col md:flex-row items-center justify-between gap-8">
        {/*
          flex flex-col: Stacks content vertically on small screens
          md:flex-row: Arranges content horizontally on medium screens and up
          items-center: Aligns items vertically in the center
          justify-between: Distributes space between items horizontally
          gap-8: Adds spacing between the two main columns/rows
        */}
        
        {/* Left content area (text and button) */}
        <div className="flex-1 text-center md:text-left">
          {/*
            text-center: Centers text on small screens
            md:text-left: Left-aligns text on medium screens and up
            text-4xl sm:text-5xl lg:text-6xl: Adaptive font size for heading
          */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 animate-fadeInDown">
            Elevate Your Career with{' '}
            <span className="text-yellow-300 drop-shadow-lg">ResumeChecker</span>
          </h1>
          {/* text-lg sm:text-xl lg:text-2xl: Adaptive font size for paragraph */}
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 opacity-90 animate-fadeInUp">
            Get instant, intelligent feedback to perfect your resume and land your dream job.
          </p>
          <button onClick={handleGoToUpload}
            className="bg-yellow-400 hover:bg-yellow-500 text-indigo-800 font-bold py-3 px-8 rounded-full
                       shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105
                       focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-opacity-75 animate-bounceIn"
          >
            Upload Your Resume
          </button>
        </div>

        {/* Right content area (image) */}
        <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0 animate-fadeInRight">
          {/*
            justify-center: Centers image horizontally on small screens (when stacked)
            md:justify-end: Pushes image to the right on medium screens and up (when side-by-side)
            mt-10: Adds top margin on small screens
            md:mt-0: Removes top margin on medium screens and up
          */}
          <img
            src={logo} 
            alt="Resume Analysis Illustration"
            // max-w-full h-auto: Ensures the image scales down proportionally to fit its container
            className="max-w-full h-auto rounded-xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out"
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/8B5CF6/FFFFFF?text=Image+Not+Found"; }} // Fallback image on error
          />
        </div>
      </div>

      {/* Tailwind CSS keyframes for animations - these are purely visual, not directly related to responsiveness layout */}
      <style jsx>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes bounceIn {
          0% { transform: scale(0.3); opacity: 0; }
          50% { transform: scale(1.05); opacity: 1; }
          70% { transform: scale(0.9); }
          100% { transform: scale(1); }
        }

        .animate-fadeInDown { animation: fadeInDown 1s ease-out forwards; }
        .animate-fadeInUp { animation: fadeInUp 1s ease-out forwards 0.3s; }
        .animate-fadeInRight { animation: fadeInRight 1s ease-out forwards 0.6s; }
        .animate-bounceIn { animation: bounceIn 0.8s ease-out forwards 0.9s; }
      `}</style>
    </section>
  );
};

export default HeroSection;