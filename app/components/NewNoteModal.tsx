"use client"

import React from 'react';

interface NewNoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewNoteModal = ({ isOpen, onClose }: NewNoteModalProps) => {
  if (!isOpen) return null;

  const colors = [
    '#E91E63', '#FF5722', '#673AB7', '#FF9800', '#03A9F4', 
    '#00BCD4', '#FF9E80', '#90CAF9', '#E0E0E0', '#FFE0B2',
    '#F48FB1', '#B2EBF2', '#B2DFDB', '#FFCDD2', '#1976D2',
    '#F8BBD0', '#FF8A65', '#E1BEE7', '#FF9800', '#FFA726',
    '#4CAF50', '#E0F7FA', '#FFF3E0', '#FFCCBC', '#81D4FA',
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-lg rounded-lg shadow-xl">
        <div className="px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Create a new note</h2>

          {/* Date Section */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
            <input
              type="text"
              value="Mar 10, 2025"
              readOnly
              className="w-40 px-3 py-2 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Color Picker */}
          <div className="grid grid-cols-8 gap-2 mb-6">
            {colors.map((color, index) => (
              <button
                key={index}
                className="w-8 h-8 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>

          {/* Title Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Note Textarea */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Note</label>
            <textarea
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 h-32 resize-none"
            />
          </div>

          {/* Visibility Section */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Visibility</label>
            <select className="w-full px-3 py-2 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:border-blue-500">
              <option value="private">Private</option>
              <option value="public">Public</option>
              <option value="team">Team</option>
            </select>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md"
            >
              Cancel
            </button>
            <button className="px-4 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-md">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewNoteModal; 