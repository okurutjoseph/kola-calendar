"use client"

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import CreateMenu from './CreateMenu';

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showCreateMenu, setShowCreateMenu] = useState(false);
  const createButtonRef = useRef<HTMLButtonElement>(null);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showCreateMenu && 
          !createButtonRef.current?.contains(event.target as Node) && 
          !(event.target as Element)?.closest('.create-menu')) {
        setShowCreateMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showCreateMenu]);

  return (
    <div className="relative">
      {/* Main sidebar container that expands */}
      <div 
        className={`fixed left-0 top-0 h-full bg-black flex flex-col items-center py-4 z-10 transition-all duration-300 ${isExpanded ? 'w-48' : 'w-16'}`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {/* Logo or profile avatar at the top */}
        <div className="w-8 h-8 rounded-full bg-blue-500 mb-4 overflow-hidden flex items-center justify-center">
          <div className="text-white text-sm">K</div>
        </div>
        
        {/* Navigation items */}
        <nav className="flex flex-col gap-0.5 flex-1 w-full">
          {/* Dashboard - active */}
          <Link href="/dashboard" className="flex items-center h-9 w-full bg-blue-600 hover:bg-blue-700 text-white px-0">
            <div className={`flex items-center h-full ${isExpanded ? 'pl-4' : 'justify-center w-full'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              </svg>
              {isExpanded && <span className="ml-3 whitespace-nowrap">Dashboard</span>}
            </div>
          </Link>
          
          {/* Create */}
          <div className="relative">
            <button 
              ref={createButtonRef}
              onClick={() => setShowCreateMenu(!showCreateMenu)}
              className="flex items-center h-9 w-full hover:bg-gray-800 text-gray-400 hover:text-white px-0 focus:outline-none"
            >
              <div className={`flex items-center h-full ${isExpanded ? 'pl-4' : 'justify-center w-full'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                {isExpanded && <span className="ml-3 whitespace-nowrap">Create</span>}
              </div>
            </button>
            <CreateMenu isVisible={showCreateMenu} />
          </div>
          
          {/* Calendar */}
          <Link href="#" className="flex items-center h-9 w-full hover:bg-gray-800 text-gray-400 hover:text-white px-0">
            <div className={`flex items-center h-full ${isExpanded ? 'pl-4' : 'justify-center w-full'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
              </svg>
              {isExpanded && <span className="ml-3 whitespace-nowrap">Calendar</span>}
            </div>
          </Link>
          
          {/* Media */}
          <Link href="#" className="flex items-center h-9 w-full hover:bg-gray-800 text-gray-400 hover:text-white px-0">
            <div className={`flex items-center h-full ${isExpanded ? 'pl-4' : 'justify-center w-full'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
                <line x1="7" y1="2" x2="7" y2="22"></line>
                <line x1="17" y1="2" x2="17" y2="22"></line>
                <line x1="2" y1="12" x2="22" y2="12"></line>
              </svg>
              {isExpanded && <span className="ml-3 whitespace-nowrap">Media</span>}
            </div>
          </Link>
          
          {/* Inbox */}
          <Link href="#" className="flex items-center h-9 w-full hover:bg-gray-800 text-gray-400 hover:text-white px-0">
            <div className={`flex items-center h-full ${isExpanded ? 'pl-4' : 'justify-center w-full'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-6l-2 3h-4l-2-3H2"></path>
                <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
              </svg>
              {isExpanded && <span className="ml-3 whitespace-nowrap">Inbox</span>}
            </div>
          </Link>
          
          {/* Tasks */}
          <Link href="#" className="flex items-center h-9 w-full hover:bg-gray-800 text-gray-400 hover:text-white px-0">
            <div className={`flex items-center h-full ${isExpanded ? 'pl-4' : 'justify-center w-full'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="8" y1="6" x2="21" y2="6"></line>
                <line x1="8" y1="12" x2="21" y2="12"></line>
                <line x1="8" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                <line x1="3" y1="18" x2="3.01" y2="18"></line>
              </svg>
              {isExpanded && <span className="ml-3 whitespace-nowrap">Tasks</span>}
            </div>
          </Link>
          
          {/* Reports */}
          <Link href="#" className="flex items-center h-9 w-full hover:bg-gray-800 text-gray-400 hover:text-white px-0">
            <div className={`flex items-center h-full ${isExpanded ? 'pl-4' : 'justify-center w-full'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              {isExpanded && <span className="ml-3 whitespace-nowrap">Reports</span>}
            </div>
          </Link>
        </nav>
        
        {/* Bottom section */}
        <div className="mt-auto flex flex-col items-center mb-4 w-full">
          {/* Avatar/profile section at bottom */}
          <div className={`flex items-center ${isExpanded ? 'justify-start pl-4' : 'justify-center'} w-full`}>
            <div className="w-8 h-8 rounded-full bg-green-600 overflow-hidden flex items-center justify-center">
              <div className="text-white text-sm">U</div>
            </div>
            {isExpanded && <span className="ml-3 text-white text-sm whitespace-nowrap">User Name</span>}
          </div>
        </div>
      </div>
    </div>
  );
} 