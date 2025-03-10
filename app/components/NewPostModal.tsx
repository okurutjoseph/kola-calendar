"use client"

import React from 'react';

interface NewPostModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewPostModal = ({ isOpen, onClose }: NewPostModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-[95vw] h-[90vh] rounded-lg shadow-xl flex flex-col">
        {/* Header */}
        <div className="border-b border-gray-200">
          {/* Title row */}
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Publish</h2>
              <button 
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 p-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>

          {/* Three column header */}
          <div className="grid grid-cols-3 gap-12 px-8 py-6">
            {/* Column 1: Select Profiles */}
            <div className="flex items-center">
              <div className="flex items-center flex-1">
                <button className="text-blue-600 hover:bg-gray-100 px-4 py-2 rounded-l border border-gray-200 flex-1">
                  Select Profiles · 1
                </button>
                <button className="hover:bg-gray-100 p-2 rounded-r border border-l-0 border-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              </div>
              <button className="ml-2 hover:bg-gray-100 p-2 rounded border border-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>
            </div>

            {/* Column 2: Your Post */}
            <div>
              <input
                type="text"
                placeholder="Your post"
                className="w-full px-6 py-3 text-gray-700 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Column 3: Write your content */}
            <div className="flex items-center justify-center">
              <span className="text-gray-500 text-lg">Write your content</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-6">
          <div className="max-w-full mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-4">
                <button className="p-2 hover:bg-[#f5f8fd] rounded-md transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                    <line x1="9" y1="9" x2="9.01" y2="9"></line>
                    <line x1="15" y1="9" x2="15.01" y2="9"></line>
                  </svg>
                </button>
                <button className="p-2 hover:bg-[#f5f8fd] rounded-md transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 11a9 9 0 0 1 9 9"></path>
                    <path d="M4 4a16 16 0 0 1 16 16"></path>
                    <circle cx="5" cy="19" r="1"></circle>
                  </svg>
                </button>
                <button className="p-2 hover:bg-[#f5f8fd] rounded-md transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                </button>
                <button className="p-2 hover:bg-[#f5f8fd] rounded-md transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                  </svg>
                </button>
                <button className="p-2 hover:bg-[#f5f8fd] rounded-md transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" y1="3" x2="12" y2="15"></line>
                  </svg>
                </button>
                <button className="p-2 hover:bg-[#f5f8fd] rounded-md transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg>
                </button>
              </div>
              <div className="min-h-[200px]">
                <div className="flex items-center justify-center h-full text-gray-400">
                  <div className="text-center">
                    <p>Write your content or</p>
                    <button className="text-blue-600">Use the AI Assistant</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 px-6 py-4 bg-white rounded-b-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 text-sm text-gray-600 hover:bg-[#f5f8fd] rounded-md">
                Select labels
              </button>
              <button className="flex items-center gap-2 text-sm text-gray-600 hover:bg-[#f5f8fd] rounded-md px-4 py-2">
                <span>Add to advocacy</span>
                <div className="w-8 h-5 bg-gray-200 rounded-full relative">
                  <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full"></div>
                </div>
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 text-sm text-gray-600 hover:bg-[#f5f8fd] rounded-md">
                Save draft
              </button>
              <button className="px-4 py-2 text-sm text-gray-600 hover:bg-[#f5f8fd] rounded-md">
                Add to queue
              </button>
              <button className="px-4 py-2 text-sm text-gray-600 hover:bg-[#f5f8fd] rounded-md">
                Schedule
              </button>
              <button className="px-4 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-md">
                Publish now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPostModal; 