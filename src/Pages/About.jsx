import React from 'react'
import { Lightbulb, Users, Handshake, Gem } from 'lucide-react'; // Icons for values section
import logo from "../Assests/image3.avif";
import logo1 from "../Assests/video.mp4";
import Navbar from '../Components/Navbar';

export const About = () => {
    // Data for the 'Our Values' section
  const values = [
    {
      icon: Lightbulb, // Icon for Innovation
      title: 'Innovation',
      description: 'Constantly seeking new ways to empower job seekers with cutting-edge tools and insights.'
    },
    {
      icon: Users, // Icon for User-Centricity
      title: 'User-Centricity',
      description: 'Building solutions that are intuitive, effective, and truly meet the evolving needs of our users.'
    },
    {
      icon: Handshake, // Icon for Integrity
      title: 'Integrity',
      description: 'Operating with honesty, transparency, and an unwavering commitment to our users\' success.'
    },
    {
      icon: Gem, // Icon for Quality
      title: 'Quality',
      description: 'Delivering precise, reliable, and high-quality resume analysis and actionable feedback.'
    },
  ];
  return (
      // Main container for the About Us page, with a unique ID for navigation
      <div id="about" className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen">
        <Navbar/>

      {/* Hero Section for About Us */}
      <section className="relative py-24 md:py-32 lg:py-40 text-center bg-gradient-to-br from-blue-600 to-purple-700 text-white overflow-hidden">
        {/* Subtle background pattern/overlay */}
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 20v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 46v-4h-2v4H0v2h4v4h2v-4h4v-2H6zM36 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 8v-4h-2v4H0v2h4v4h2v-4h4v-2H6zM36 12v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM18 12v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM18 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM18 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM0 20v-4h-2v4H0v2h4v4h2v-4h4v-2H6zM0 34v-4h-2v4H0v2h4v4h2v-4h4v-2H6zM42 20v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM42 42v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM42 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM0 0v-4h-2v4H0v2h4v4h2v-4h4v-2H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}
        ></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 animate-fadeInUp">
            About <span className="text-yellow-300">ResumeChecker</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto opacity-0 animate-fadeIn delay-300">
            Empowering job seekers with intelligent tools to craft resumes that stand out and land interviews.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="md:pr-8">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
              Our <span className="text-blue-600 dark:text-blue-400">Mission</span>
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
              At ResumeChecker, our mission is to democratize career success. We believe that everyone deserves the opportunity to present their best self to potential employers, regardless of their background or access to traditional career coaching.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              We leverage cutting-edge AI and industry insights to provide personalized, actionable feedback, transforming ordinary resumes into powerful tools that open doors to dream jobs.
            </p>
          </div>
          <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden p-6 md:p-8 transform hover:scale-105 transition-transform duration-300">
            {/* Placeholder image for mission */}
            <img
              src={logo}
              alt="Our Mission"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            {/* Optional text overlay on image */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm p-3 rounded-lg text-center text-sm font-medium text-gray-800 dark:text-gray-200">
              Transforming careers, one resume at a time.
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12">
            Our Core <span className="text-purple-600 dark:text-purple-400">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 flex flex-col items-center text-center
                           transform hover:scale-105 transition-transform duration-300 border border-transparent hover:border-blue-300 dark:hover:border-blue-600"
              >
                <value.icon size={48} className="text-blue-600 dark:text-blue-400 mb-6" /> {/* Render icon component */}
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">{value.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden p-6 md:p-8 order-2 md:order-1 transform hover:scale-105 transition-transform duration-300">
            {/* Placeholder video for story */}
            <video width="640" height="360"  autoPlay loop muted>
                <source src={logo1} type="video/mp4" />
                    Your browser does not support the video tag.
            </video>
            {/* Optional text overlay on video*/}
            <div className="absolute bottom-4 left-4 right-4 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm p-3 rounded-lg text-center text-sm font-medium text-gray-800 dark:text-gray-200">
              From an idea to empowering thousands.
            </div>
          </div>
          <div className="md:pl-8 order-1 md:order-2">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
              Our <span className="text-yellow-600 dark:text-yellow-400">Story</span>
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
              ResumeChecker was born from a simple frustration: the challenge of getting a resume noticed by both humans and Applicant Tracking Systems. Our founders, experienced recruiters and software engineers, realized there was a gap in the market for an accessible, intelligent tool.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Starting as a small project, it quickly grew into a robust platform, driven by a passion to help job seekers overcome automated gatekeepers and confidently pursue their career aspirations. Every feature we build is designed with your success in mind.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 md:py-24 text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Job Search?
          </h2>
          <p className="text-lg md:text-xl mb-10 opacity-90">
            Join thousands of satisfied job seekers who have landed interviews with ResumeChecker.
          </p>
          <a
            href="/Upload" // Link to your upload section
            className="inline-block bg-white text-blue-600 font-bold py-4 px-10 rounded-full text-xl shadow-lg
                       hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Start Your Free Analysis Today
          </a>
        </div>
      </section>

      {/* Tailwind CSS Custom Animations (if not already in global CSS) */}
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
        .delay-300 { animation-delay: 0.3s; }

        /* Simple pattern for background */
        .bg-pattern-light {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 20v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 46v-4h-2v4H0v2h4v4h2v-4h4v-2H6zM36 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 8v-4h-2v4H0v2h4v4h2v-4h4v-2H6zM36 12v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM18 12v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM18 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM18 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM0 20v-4h-2v4H0v2h4v4h2v-4h4v-2H6zM0 34v-4h-2v4H0v2h4v4h2v-4h4v-2H6zM42 20v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM42 42v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM42 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM0 0v-4h-2v4H0v2h4v4h2v-4h4v-2H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")';
        }
      `}</style>
    </div>
  )
}
