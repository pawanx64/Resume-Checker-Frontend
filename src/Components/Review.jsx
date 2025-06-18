import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const CustomerReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      rating: 5,
      title: 'A Game Changer!',
      text: 'ResumeChecker transformed my job search. The feedback was incredibly precise, helping me land interviews faster than ever before. Highly recommend!',
      author: 'Sarah L.',
      date: 'Aug 15, 2024',
    },
    {
      id: 2,
      rating: 4,
      title: 'Very Helpful Tool',
      text: 'The resume analysis is very insightful. It pointed out areas I never considered. While not perfect, it significantly improved my resume.',
      author: 'Mark T.',
      date: 'Jul 28, 2024',
    },
    {
      id: 3,
      rating: 5,
      title: 'Excellent Resource!',
      text: 'This is an excellent tool! I ran my resume through ResumeChecker and my first rating was a 37% which would not have been competitive. After revisions, I got to 85%!',
      author: 'Patricia O.',
      date: 'Jul 4, 2024',
    },
    {
      id: 4,
      rating: 4,
      title: 'Improved My Confidence',
      text: 'Jobscan helped me to fine-tune my resume. The experience was a positive one. The tool was easy to use and it helped me get the resume as close as possible to the job description.',
      author: 'Stephen H.',
      date: 'May 31, 2024',
    },
    {
      id: 5,
      rating: 5,
      title: 'Wonderful Aide for Resume',
      text: 'I love Jobscan because it helps me get my clients one step closer to obtaining an interview.',
      author: 'Kathleen C.',
      date: 'May 30, 2024',
    },
    {
      id: 6,
      rating: 5,
      title: 'Highly Recommended!',
      text: 'ResumeChecker is very helpful in tailoring the resume following job description. The AI generated suggestions are very helpful and easy to implement.',
      author: 'Tania G.',
      date: 'Feb 28, 2024',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviewsPerPage, setReviewsPerPage] = useState(1);

  const carouselRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setReviewsPerPage(3);
      } else if (window.innerWidth >= 768) { 
        setReviewsPerPage(2);
      } else { 
        setReviewsPerPage(1);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        prevReviews();
      } else if (event.key === 'ArrowRight') {
        nextReviews();
      }
    };

    handleResize(); 
    window.addEventListener('resize', handleResize); 
    if (carouselRef.current) {
      carouselRef.current.addEventListener('keydown', handleKeyDown); 
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (carouselRef.current) {
        carouselRef.current.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, [currentIndex, reviewsPerPage]); 

  const nextReviews = () => {
    setCurrentIndex((prevIndex) => {
      const next = prevIndex + 1;
      if (next > reviews.length - reviewsPerPage) {
        return 0; 
      }
      return next;
    });
  };

  const prevReviews = () => {
    setCurrentIndex((prevIndex) => {
      const next = prevIndex - 1;
      if (next < 0) {
        return reviews.length - reviewsPerPage; 
      }
      return next;
    });
  };

  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  return (
    <section id="reviews" className="scroll-smooth bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 py-20 md:py-24 lg:py-32"
      aria-labelledby="reviews-heading" role="region">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 id="reviews-heading" className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-white text-center mb-16">
          What Our <span className="text-blue-600 dark:text-blue-400">Customers</span> Are Saying
        </h2>

        <div className="flex items-center justify-center">
          <button
            onClick={prevReviews}
            className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-blue-600 text-white shadow-xl
                       hover:bg-blue-700 transition-all duration-300 z-10 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-75
                       transform hover:scale-110"
            aria-label="Previous reviews"
          >
            <ChevronLeft size={28} />
          </button>

          <div
            ref={carouselRef}
            tabIndex="0" 
            className="relative w-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 rounded-xl"
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${(currentIndex * 100) / reviewsPerPage}%)` }}
            >
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className={`flex-shrink-0 p-2 sm:p-4 ${
                    reviewsPerPage === 1 ? 'w-full' :
                    reviewsPerPage === 2 ? 'w-1/2' :
                    'w-1/3'
                  }`}
                >
                  <div className="relative bg-white dark:bg-gray-900 rounded-xl shadow-2xl p-6 sm:p-8 flex flex-col justify-between
                                  transform hover:scale-[1.02] transition-transform duration-300 ease-in-out border border-transparent
                                  hover:border-blue-300 dark:hover:border-blue-600 h-full overflow-hidden">
                    <span className="absolute -top-4 -right-4 md:-top-8 md:-right-8 text-gray-200 dark:text-gray-700 text-8xl md:text-[10rem] font-serif opacity-30 z-0">
                      &ldquo;
                    </span>

                    <div className="relative z-10"> 
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={24}
                            fill={i < review.rating ? '#FBBF24' : '#E5E7EB'}
                            stroke={i < review.rating ? '#FBBF24' : '#D1D5DB'}
                            className="mr-1"
                          />
                        ))}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4 leading-tight">{review.title}</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                        "{review.text}"
                      </p>
                    </div>
                    <div className="text-right pt-4 border-t border-gray-100 dark:border-gray-700 relative z-10">
                      <p className="text-gray-800 dark:text-gray-200 font-semibold text-lg">{review.author}</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{review.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={nextReviews}
            className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-blue-600 text-white shadow-xl
                       hover:bg-blue-700 transition-all duration-300 z-10 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-75
                       transform hover:scale-110"
            aria-label="Next reviews"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * reviewsPerPage)} 
              className={`h-3 rounded-full transition-all duration-300
                ${Math.floor(currentIndex / reviewsPerPage) === index
                  ? 'bg-blue-600 w-8'
                  : 'bg-gray-300 dark:bg-gray-600 w-3'
                }`}
              aria-label={`Go to review set ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviewsSection;