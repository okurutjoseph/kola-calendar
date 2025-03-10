"use client"

import React from 'react';

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WelcomeModal = ({ isOpen, onClose }: WelcomeModalProps) => {
  if (!isOpen) return null;

  // Social media platforms data
  const socialPlatforms = [
    { name: 'Facebook', icon: 'facebook.svg', color: '#1877F2' },
    { name: 'Google', icon: 'google.svg', color: '#4285F4' },
    { name: 'Instagram', icon: 'instagram.svg', color: '#E1306C' },
    { name: 'LinkedIn', icon: 'linkedin.svg', color: '#0A66C2' },
    { name: 'Reddit', icon: 'reddit.svg', color: '#FF4500' },
    { name: 'Pinterest', icon: 'pinterest.svg', color: '#E60023' },
    { name: 'Snapchat', icon: 'snapchat.svg', color: '#FFFC00' },
    { name: 'Threads', icon: 'threads.svg', color: '#000000' },
    { name: 'TikTok', icon: 'tiktok.svg', color: '#000000' },
    { name: 'TikTok Ads', icon: 'tiktok.svg', color: '#000000' },
    { name: 'X (Twitter)', icon: 'twitter.svg', color: '#000000' },
    { name: 'Tumblr', icon: 'tumblr.svg', color: '#36465D' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-6xl p-0 max-h-[90vh] overflow-hidden">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col md:flex-row h-full">
          {/* Left content - Welcome text and video - Not scrollable */}
          <div className="md:w-[40%] p-8 flex-shrink-0">
            <h1 className="text-3xl font-bold text-blue-600 mb-5">Welcome to Vista Social!</h1>
            
            <p className="text-gray-700 mb-6">
              We are beyond excited that you chose our tool to help you manage yours and take it to new heights! To get started, please begin by connecting your social profiles. You can also watch these few quick videos to help you get started!
            </p>
            
            <h2 className="text-xl font-bold text-gray-800 mb-5">Watch a quick tutorial</h2>
            
            {/* Video thumbnail with play button */}
            <div className="relative bg-gray-200 rounded-xl overflow-hidden aspect-video mb-6">
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="h-16 w-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20"></div>
              <img 
                src="/vista-tutorial-thumbnail.jpg" 
                alt="Getting Started with Vista Social" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  e.currentTarget.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15e8b8346ac%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15e8b8346ac%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23F5F5F5%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.9296875%22%20y%3D%22217.7%22%3EVista Tutorial%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E';
                }}
              />
            </div>
          </div>

          {/* Right content - Social media connections - Scrollable */}
          <div className="md:w-[60%] bg-gray-50 p-8 max-h-[90vh] overflow-y-auto rounded-l-2xl">
            <h2 className="text-xl font-bold text-gray-800 mb-5">Connect your social profiles</h2>
            
            {/* Search bar */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search for network"
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            {/* Social platforms grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socialPlatforms.map((platform) => (
                <div key={platform.name} className="border border-gray-200 rounded-xl p-4 flex flex-col items-center bg-white">
                  <div className="mb-2 flex items-center">
                    <div 
                      className="w-7 h-7 rounded-full flex items-center justify-center mr-2"
                      style={{ backgroundColor: platform.color === '#FFFC00' ? '#FFFC00' : 'transparent' }}
                    >
                      {/* Social Media Icon Fallback */}
                      <div 
                        className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center text-white"
                        style={{ backgroundColor: platform.color !== '#FFFC00' ? platform.color : 'transparent' }}
                      >
                        {platform.name === 'Facebook' && (
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127c-.82-.088-1.643-.13-2.467-.129-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                          </svg>
                        )}
                        {platform.name === 'TikTok' && (
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692a6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"></path>
                          </svg>
                        )}
                        {platform.name === 'Instagram' && (
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                        )}
                        {!['Facebook', 'TikTok', 'Instagram'].includes(platform.name) && (
                          <span className="text-xs">{platform.name.charAt(0)}</span>
                        )}
                      </div>
                    </div>
                    <span className="text-sm">{platform.name}</span>
                  </div>
                  <button className="mt-2 w-full py-2 px-4 border border-blue-500 text-blue-500 rounded-xl hover:bg-blue-50 transition-colors">
                    Connect
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal; 