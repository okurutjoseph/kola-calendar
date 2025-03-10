"use client"

import React, { useState } from 'react';

const ProfileSelector = () => {
  const [profiles] = useState(['Kola']);

  return (
    <div className="bg-white shadow-md h-full border-r border-gray-200 transition-all duration-300 w-72 overflow-hidden">
      <div className="py-4 px-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-blue-600 font-medium">
            <span className="text-sm">Select Profiles · {profiles.length}</span>
            <button className="focus:outline-none hover:bg-gray-50 p-1 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
          
          <div className="flex items-center gap-1">
            <button className="focus:outline-none text-blue-600 hover:bg-gray-50 p-1.5 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="6" x2="20" y2="6"></line>
                <line x1="4" y1="18" x2="20" y2="18"></line>
              </svg>
            </button>
            <button className="focus:outline-none text-blue-600 hover:bg-gray-50 p-1.5 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-3 flex items-center justify-between cursor-pointer py-2.5 px-3 hover:bg-gray-50 rounded-md group">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 flex items-center justify-center text-green-600 bg-green-50 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
            </div>
            <span className="text-gray-700 font-medium">Kola</span>
          </div>
          <button className="focus:outline-none text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity hover:text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 15l-6-6-6 6"/>
            </svg>
          </button>
        </div>
        
        <button className="flex items-center gap-2 text-blue-600 font-medium py-2.5 px-3 hover:bg-gray-50 rounded-md w-full">
          <span className="text-lg leading-none">+</span>
          <span className="text-sm">Add Profiles</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileSelector; 