"use client"

import React from 'react';

const MediaLibrary = () => {
  return (
    <div className="h-full w-full flex flex-col bg-[#f8fafd]">
      {/* Header */}
      <div className="flex items-center justify-between py-4 px-6 border-b border-gray-200">
        <h1 className="text-xl font-medium text-blue-600">Media Library</h1>
        
        <div className="flex items-center space-x-3">
          {/* Search */}
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search" 
              className="px-4 py-2 pl-10 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 w-64"
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 absolute left-3 top-3" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
          
          {/* Filters */}
          <button className="flex items-center space-x-1 px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-md">
            <span>Select filters · 4</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          
          {/* Add folder button */}
          <button className="px-4 py-2 bg-white text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50">
            Add folder
          </button>
          
          {/* Add media button */}
          <div className="relative">
            <button className="flex items-center space-x-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              <span>Add media</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Content - Empty State */}
      <div className="flex-1 flex flex-col items-center justify-center py-16">
        <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <h2 className="text-xl text-gray-500 font-medium">No medias found</h2>
      </div>

      {/* Windows activation watermark (matches the image) */}
      <div className="absolute bottom-2 right-2 text-xs text-gray-400">
        Activate Windows<br/>
        Go to Settings to activate Windows.
      </div>
    </div>
  );
};

export default MediaLibrary; 