import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react'; // Import Plus and Minus icons
import Navbar from '../Components/Navbar';

const FAQSection = () => {
  const faqItems = [
    {
      id: 1,
      question: 'How does ResumeChecker improve my resume?',
      answer: 'ResumeChecker uses advanced AI to analyze your resume against job descriptions, identifying missing keywords, suggesting skill improvements, and optimizing formatting for Applicant Tracking Systems (ATS).',
    },
    {
      id: 2,
      question: 'Is ResumeChecker free to use?',
      answer: 'We offer a free tier with basic resume analysis. For more in-depth insights, advanced features, and unlimited scans, premium plans are available.',
    },
    {
      id: 3,
      question: 'What file formats does ResumeChecker support?',
      answer: 'ResumeChecker supports .pdf and .docx file formats for resume uploads. You can also paste your resume text directly into our editor.',
    },
    {
      id: 4,
      question: 'How accurate are the ATS compliance scores?',
      answer: 'Our ATS compliance scores are highly accurate, based on extensive research into common ATS algorithms. We continuously update our system to reflect the latest industry standards.',
    },
    {
      id: 5,
      question: 'Can I get personalized feedback on my resume?',
      answer: 'Yes, ResumeChecker provides personalized, actionable feedback tailored to your specific resume and the job you are targeting, helping you make precise improvements.',
    },
    {
      id: 6,
      question: 'Is my personal data safe with ResumeChecker?',
      answer: 'Absolutely. We prioritize your privacy and data security. All uploaded resumes and personal information are encrypted and handled with the strictest confidentiality. We do not share your data with third parties.',
    },
  ];

  const [openItemId, setOpenItemId] = useState(null); // State to track which FAQ item is open

  const toggleFAQ = (id) => {
    setOpenItemId(openItemId === id ? null : id); // Toggle open/close
  };

  return (
    <div>
       <Navbar/>
      <section className="bg-white dark:bg-gray-900 py-20 md:py-24 lg:py-32">
      
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-white text-center mb-16">
            Frequently Asked <span className="text-purple-600 dark:text-purple-400">Questions</span>
          </h2>

          <div className="space-y-6">
            {faqItems.map((item) => (
              <div
                key={item.id}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden
                          border border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out"
              >
                <button
                  className="flex justify-between items-center w-full p-6 text-left
                            text-xl font-semibold text-gray-800 dark:text-white
                            hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                  onClick={() => toggleFAQ(item.id)}
                  aria-expanded={openItemId === item.id}
                  aria-controls={`faq-content-${item.id}`}
                >
                  {item.question}
                  {openItemId === item.id ? (
                    <Minus size={24} className="text-purple-600 dark:text-purple-400" />
                  ) : (
                    <Plus size={24} className="text-gray-600 dark:text-gray-400" />
                  )}
                </button>
                {openItemId === item.id && (
                  <div
                    id={`faq-content-${item.id}`}
                    className="px-6 pb-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed animate-fadeIn"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Tailwind CSS keyframes for fade-in animation */}
        <style jsx>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
        `}</style>
      </section>
    </div>
  );
};

export default FAQSection;
