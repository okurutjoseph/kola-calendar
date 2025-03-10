"use client"

import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import ProfileSelector from '../components/ProfileSelector';

export default function Dashboard() {
  const [showProfileSelector, setShowProfileSelector] = useState(false);

  useEffect(() => {
    // Add a small delay for the animation to trigger after component mount
    const timer = setTimeout(() => {
      setShowProfileSelector(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex min-h-screen bg-[#f5f8fd]">
      <Sidebar />
      
      {/* Profile selector with slide-in animation */}
      <div 
        className={`transform transition-transform duration-500 ease-out ${
          showProfileSelector ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <ProfileSelector />
      </div>
      
      {/* Main content - adjusted with margin to account for sidebar and profile selector */}
      <main className="flex-1 p-6 transition-all duration-300 ml-[352px]">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>
          
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Welcome to Your Dashboard</h2>
            <p className="text-gray-600">
              This is your new dashboard page with an expandable sidebar navigation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {/* Example dashboard cards */}
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-[#f5f8fd] border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="h-32 flex items-center justify-center">
                    <span className="text-gray-400">Dashboard Item {item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 