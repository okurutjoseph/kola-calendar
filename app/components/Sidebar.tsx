import React from 'react';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-full w-16 bg-black flex flex-col items-center py-4">
      {/* Logo or profile avatar at the top */}
      <div className="w-8 h-8 rounded-full bg-blue-500 mb-8 overflow-hidden flex items-center justify-center">
        <div className="text-white text-sm">K</div>
      </div>
      
      {/* Navigation icons */}
      <nav className="flex flex-col items-center gap-6 flex-1">
        {/* Home icon */}
        <Link href="/dashboard" className="w-10 h-10 rounded-md bg-blue-600 flex items-center justify-center text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          </svg>
        </Link>
        
        {/* Message icon */}
        <Link href="#" className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </Link>
        
        {/* Grid/calculator icon */}
        <Link href="#" className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="3" y1="9" x2="21" y2="9"></line>
            <line x1="9" y1="21" x2="9" y2="9"></line>
          </svg>
        </Link>
        
        {/* User/profile icon */}
        <Link href="#" className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </Link>
        
        {/* Chat/message icon */}
        <Link href="#" className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        </Link>
        
        {/* Audio/waveform icon */}
        <Link href="#" className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 12h4l3 8 3-16 3 8h4"></path>
          </svg>
        </Link>
        
        {/* Star icon */}
        <Link href="#" className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </Link>
      </nav>
      
      {/* Bottom section */}
      <div className="mt-auto flex flex-col items-center gap-6 mb-4">
        {/* Help icon */}
        <Link href="#" className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
        </Link>
        
        {/* Avatar/profile section at bottom */}
        <div className="w-8 h-8 rounded-full bg-green-600 overflow-hidden flex items-center justify-center">
          <div className="text-white text-sm">U</div>
        </div>
      </div>
    </div>
  );
} 