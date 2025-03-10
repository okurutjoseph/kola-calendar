"use client"

import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import ProfileSelector from '../components/ProfileSelector';
import NewPostModal from '../components/NewPostModal';
import NewNoteModal from '../components/NewNoteModal';
import MediaLibrary from '../components/MediaLibrary';
import TasksManager from '../components/TasksManager';
import WelcomeModal from '../components/WelcomeModal';

export default function Dashboard() {
  const [showProfileSelector, setShowProfileSelector] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [activeItem, setActiveItem] = useState('dashboard');
  const [activeDate, setActiveDate] = useState(10); // Set day 10 as active
  const [showNewPostModal, setShowNewPostModal] = useState(false);
  const [showNewNoteModal, setShowNewNoteModal] = useState(false);
  const [showWelcomeModal, setShowWelcomeModal] = useState(true); // Start with welcome modal visible

  useEffect(() => {
    // Add a small delay for the animation to trigger after component mount
    const timer = setTimeout(() => {
      setShowProfileSelector(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Calendar date cell component with hover icons
  const CalendarDateCell = ({ 
    day, 
    isCurrentMonth = true, 
    hasEvent = false 
  }: { 
    day: number;
    isCurrentMonth?: boolean;
    hasEvent?: boolean;
  }) => {
    const isActive = isCurrentMonth && day === activeDate;
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div 
        className={`border-b border-r border-gray-200 p-2 relative ${!isCurrentMonth ? 'text-gray-400' : ''}`}
        onClick={() => isCurrentMonth && setActiveDate(day)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isActive ? (
          <div className="w-7 h-7 rounded-full bg-blue-500 text-white flex items-center justify-center">
            {day}
          </div>
        ) : (
          <span>{day}</span>
        )}
        
        {hasEvent && !isHovered && (
          <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-blue-500"></div>
        )}
        
        {isHovered && isCurrentMonth && (
          <div className="absolute top-1 right-1 flex space-x-1">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setShowNewPostModal(true);
              }}
              className="w-6 h-6 rounded bg-blue-100 hover:bg-blue-200 flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
            </button>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setShowNewNoteModal(true);
              }}
              className="w-6 h-6 rounded bg-blue-100 hover:bg-blue-200 flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </button>
          </div>
        )}
      </div>
    );
  };

  // Render the appropriate content based on the active sidebar item
  const renderContent = () => {
    if (activeItem === 'calendar' && showCalendar) {
      return (
        <div className="h-full w-full bg-white flex flex-col">
          {/* Calendar Header */}
          <div className="border-b border-gray-200 px-4 py-2 flex-shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {/* Left side controls */}
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
              </div>

              <div className="flex items-center space-x-4">
                {/* Center controls */}
                <div className="flex items-center space-x-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md flex items-center">
                    <span>Monthly</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                <span className="text-sm text-gray-700">March 2025</span>
                <span className="text-sm text-gray-500">GMT +03:00 EAT</span>
              </div>

              <div className="flex items-center space-x-3">
                {/* Right side controls */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search"
                    className="pl-8 pr-4 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 absolute left-2.5 top-2.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
                <button className="flex items-center space-x-1 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded-lg">
                  <span>Select filters · 4</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="flex items-center space-x-2 px-4 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">Create</span>
                </button>
              </div>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="flex-1 overflow-hidden">
            {/* Days of week header */}
            <div className="grid grid-cols-7 border-b border-gray-200">
              {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
                <div key={day} className="text-sm font-medium text-gray-500 text-center py-2">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar days */}
            <div className="grid grid-cols-7 h-[calc(100%-40px)]">
              {/* Row 1 */}
              <CalendarDateCell day={23} isCurrentMonth={false} />
              <CalendarDateCell day={24} hasEvent={true} />
              <CalendarDateCell day={25} />
              <CalendarDateCell day={26} />
              <CalendarDateCell day={27} />
              <CalendarDateCell day={28} />
              <CalendarDateCell day={1} />

              {/* Row 2 */}
              <CalendarDateCell day={2} />
              <CalendarDateCell day={3} />
              <CalendarDateCell day={4} />
              <CalendarDateCell day={5} />
              <CalendarDateCell day={6} />
              <CalendarDateCell day={7} />
              <CalendarDateCell day={8} />

              {/* Row 3 */}
              <CalendarDateCell day={9} />
              <CalendarDateCell day={10} />
              <CalendarDateCell day={11} />
              <CalendarDateCell day={12} />
              <CalendarDateCell day={13} />
              <CalendarDateCell day={14} />
              <CalendarDateCell day={15} />

              {/* Row 4 */}
              <CalendarDateCell day={16} />
              <CalendarDateCell day={17} />
              <CalendarDateCell day={18} />
              <CalendarDateCell day={19} />
              <CalendarDateCell day={20} />
              <CalendarDateCell day={21} />
              <CalendarDateCell day={22} />

              {/* Row 5 */}
              <CalendarDateCell day={23} />
              <CalendarDateCell day={24} />
              <CalendarDateCell day={25} />
              <CalendarDateCell day={26} />
              <CalendarDateCell day={27} />
              <CalendarDateCell day={28} />
              <CalendarDateCell day={29} />

              {/* Row 6 */}
              <CalendarDateCell day={30} />
              <CalendarDateCell day={31} />
              <CalendarDateCell day={1} isCurrentMonth={false} />
              <CalendarDateCell day={2} isCurrentMonth={false} />
              <CalendarDateCell day={3} isCurrentMonth={false} />
              <CalendarDateCell day={4} isCurrentMonth={false} />
              <div className="p-2 text-gray-400">
                <span>5</span>
                <div className="mt-2 text-xs text-gray-400">Activate Windows<br/>Go to Settings to activate Windows.</div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (activeItem === 'media') {
      return <MediaLibrary />;
    } else if (activeItem === 'tasks') {
      return <TasksManager />;
    } else {
      return (
        <div className="p-6 h-full overflow-auto">
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
      );
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[#f5f8fd]">
      {/* Sidebar - fixed width */}
      <Sidebar 
        onCalendarClick={() => {
          setShowCalendar(!showCalendar);
          setActiveItem('calendar');
        }} 
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />
      
      {/* Content area - flexible layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Profile selector - fixed width */}
        <div 
          className={`w-72 transition-transform duration-500 ease-out ${
            showProfileSelector ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <ProfileSelector />
        </div>
        
        {/* Main content - fills remaining space */}
        <div className="flex-1 overflow-hidden">
          {renderContent()}
        </div>
      </div>

      {/* Modals */}
      <NewPostModal isOpen={showNewPostModal} onClose={() => setShowNewPostModal(false)} />
      <NewNoteModal isOpen={showNewNoteModal} onClose={() => setShowNewNoteModal(false)} />
      <WelcomeModal isOpen={showWelcomeModal} onClose={() => setShowWelcomeModal(false)} />
    </div>
  );
} 