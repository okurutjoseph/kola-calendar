"use client"

import React from 'react';

const RegistrationForm = () => {
  return (
    <div className="flex h-screen">
      {/* Left side - Blue background with testimonial */}
      <div className="w-[45%] bg-blue-600 text-white p-12 relative overflow-hidden">
        {/* Curved lines/rays background */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,0 C300,100 400,400 800,400" stroke="white" strokeWidth="6" fill="none" />
            <path d="M0,50 C300,150 400,450 800,450" stroke="white" strokeWidth="6" fill="none" />
            <path d="M0,100 C300,200 400,500 800,500" stroke="white" strokeWidth="6" fill="none" />
            <path d="M0,150 C300,250 400,550 800,550" stroke="white" strokeWidth="6" fill="none" />
            <path d="M0,200 C300,300 400,600 800,600" stroke="white" strokeWidth="6" fill="none" />
            <path d="M0,250 C300,350 400,650 800,650" stroke="white" strokeWidth="6" fill="none" />
            <path d="M0,300 C300,400 400,700 800,700" stroke="white" strokeWidth="6" fill="none" />
            <path d="M0,350 C300,450 400,750 800,750" stroke="white" strokeWidth="6" fill="none" />
            <path d="M0,400 C300,500 400,800 800,800" stroke="white" strokeWidth="6" fill="none" />
          </svg>
        </div>
        
        {/* Testimonial content */}
        <div className="flex flex-col h-full justify-center relative z-10">
          {/* Quote */}
          <div className="mb-12">
            <p className="text-[28px] font-semibold leading-tight">
              &quot;Awesome social media content organizer and planner! All the features on this platform were easy to use, and the software&apos;s user experience caught my attention on the spot. The platform is straightforward to use, intuitive and simple to navigate. Lastly, the cherry on top is $5 per profile and unlimited users 😍!!!&quot;
            </p>
          </div>
          
          {/* Author with photo and rating */}
          <div className="flex items-center">
            <div className="w-20 h-20 rounded-full overflow-hidden mr-4 border-2 border-white">
              <div className="w-full h-full bg-gray-300 relative">
                {/* If you have the actual image, replace this div with an Image component */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  Photo
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold">TUDOR SOREA</h3>
              <p className="text-sm mb-1">CEO at ResQ Digital</p>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right side - Registration form */}
      <div className="w-[55%] p-12 overflow-y-auto flex flex-col">
        <div className="max-w-md mx-auto w-full flex-1">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Let's get to know you</h1>
          <p className="text-gray-600 mb-8">Your answers will help us tailor your Vista Social experience</p>
          
          <form className="space-y-6">
            <div>
              <input 
                type="text" 
                placeholder="Organization name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div className="relative">
              <select className="w-full p-3 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-500">
                <option value="" disabled selected>Select country</option>
                <option value="us">United States</option>
                <option value="ca">Canada</option>
                <option value="uk">United Kingdom</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
            
            <div className="relative">
              <select className="w-full p-3 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-500">
                <option value="" disabled selected>What best describes you?</option>
                <option value="agency">Agency</option>
                <option value="business">Business</option>
                <option value="freelancer">Freelancer</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
            
            <div className="relative">
              <select className="w-full p-3 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-500">
                <option value="" disabled selected>How many people work at your organization?</option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-200">51-200</option>
                <option value="201+">201+</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
            
            <div className="relative">
              <select className="w-full p-3 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-500">
                <option value="" disabled selected>How many social profiles do you manage?</option>
                <option value="1-5">1-5</option>
                <option value="6-10">6-10</option>
                <option value="11-20">11-20</option>
                <option value="21+">21+</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
            
            <div className="relative">
              <select className="w-full p-3 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-500">
                <option value="" disabled selected>Which sounds most like you?</option>
                <option value="option1">I need to grow my social presence</option>
                <option value="option2">I want to streamline my workflow</option>
                <option value="option3">I need better analytics</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
            
            <div className="relative">
              <select className="w-full p-3 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-500">
                <option value="" disabled selected>How did you hear about Vista Social?</option>
                <option value="search">Search Engine</option>
                <option value="social">Social Media</option>
                <option value="referral">Referral</option>
                <option value="ad">Advertisement</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center"
            >
              Complete registration
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm; 