"use client"

import React, { useState } from 'react';

const TasksManager = () => {
  const [activeTab, setActiveTab] = useState('my-open-tasks');

  return (
    <div className="h-full w-full flex flex-col bg-[#f8fafd]">
      {/* Header with tabs and controls */}
      <div className="flex items-center justify-between py-4 px-6 border-b border-gray-200">
        {/* Tabs */}
        <div className="flex items-center space-x-6">
          <button 
            className={`text-sm font-medium pb-2 ${activeTab === 'my-open-tasks' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-800'}`}
            onClick={() => setActiveTab('my-open-tasks')}
          >
            My open tasks
          </button>
          <button 
            className={`text-sm font-medium pb-2 ${activeTab === 'my-open-priority-tasks' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-800'}`}
            onClick={() => setActiveTab('my-open-priority-tasks')}
          >
            My open priority tasks
          </button>
          <button 
            className={`text-sm font-medium pb-2 ${activeTab === 'my-closed-tasks' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-800'}`}
            onClick={() => setActiveTab('my-closed-tasks')}
          >
            My closed tasks
          </button>
          <button 
            className={`text-sm font-medium pb-2 ${activeTab === 'all-tasks' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-800'}`}
            onClick={() => setActiveTab('all-tasks')}
          >
            All tasks
          </button>
        </div>
        
        {/* Controls */}
        <div className="flex items-center space-x-3">
          {/* Filters */}
          <button className="flex items-center space-x-1 px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-md border border-gray-200">
            <span>Select filters · 0</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          
          {/* Export button */}
          <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
          </button>
          
          {/* New Task button */}
          <button className="flex items-center space-x-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span className="text-sm font-medium">New Task</span>
          </button>
        </div>
      </div>
      
      {/* Content - Empty State */}
      <div className="flex-1 flex flex-col items-center justify-center py-16">
        <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <h2 className="text-lg text-gray-500">You don&apos;t have any assigned tasks for selected profiles.</h2>
      </div>

      {/* Windows activation watermark (matches the image) */}
      <div className="absolute bottom-2 right-2 text-xs text-gray-400">
        Activate Windows<br/>
        Go to Settings to activate Windows.
      </div>
    </div>
  );
};

export default TasksManager; 