"use client"

import React, { useState } from 'react';
import NewPostModal from './NewPostModal';
import NewNoteModal from './NewNoteModal';

const CreateMenu = ({ isVisible }: { isVisible: boolean }) => {
  const [showNewPostModal, setShowNewPostModal] = useState(false);
  const [showNewNoteModal, setShowNewNoteModal] = useState(false);
  
  const menuItems = [
    { title: 'New post', href: '#', onClick: () => setShowNewPostModal(true) },
    { title: 'New note', href: '#', onClick: () => setShowNewNoteModal(true) },
    { title: 'Ideas', href: '#' },
    { title: 'Bulk publishing', href: '#' },
    { title: 'Find content', href: '#' },
    { title: 'Smart publishing', href: '#' },
    { title: 'Instagram planner', href: '#' },
    { title: 'TikTok planner', href: '#' },
    { title: 'Thread maker', href: '#' },
  ];

  if (!isVisible) return null;

  return (
    <>
      <div className="create-menu absolute left-full top-[-1px] ml-0.5 bg-white shadow-lg rounded-lg w-64 py-2 transform transition-all duration-200">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={item.onClick}
            className="flex items-center w-full px-6 py-2.5 text-sm text-gray-700 hover:bg-[#f5f8fd] transition-colors text-left"
          >
            {item.title}
          </button>
        ))}
      </div>

      <NewPostModal 
        isOpen={showNewPostModal} 
        onClose={() => setShowNewPostModal(false)} 
      />

      <NewNoteModal
        isOpen={showNewNoteModal}
        onClose={() => setShowNewNoteModal(false)}
      />
    </>
  );
};

export default CreateMenu; 