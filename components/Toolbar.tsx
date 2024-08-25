"use client"; // Ensures client-side rendering

import React, { useState } from 'react';
import { useStore } from '../store/useStore';

const Toolbar: React.FC = () => {
  const { undo, redo, setCellFormatting, search, clearSearch } = useStore();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    search(searchQuery);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    clearSearch();
  };

  const handleApplyFormatting = () => {
    // Apply formatting to cell (0, 0) for demonstration
    setCellFormatting(0, 0, { textAlign: 'center', fontSize: 'text-lg' });
  };

  return (
    <div className="flex flex-col space-y-4 mb-4">
      <div className="flex space-x-2 mb-2">
        <button
          onClick={() => undo()}
          className="p-2 bg-gray-500 text-white rounded"
        >
          Undo
        </button>
        <button
          onClick={() => redo()}
          className="p-2 bg-gray-500 text-white rounded"
        >
          Redo
        </button>
      </div>
      <div className="flex space-x-2">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          className="p-2 border rounded"
          placeholder="Search..."
        />
        <button
          onClick={handleSearch}
          className="p-2 bg-green-500 text-white rounded"
        >
          Search
        </button>
        <button
          onClick={handleClearSearch}
          className="p-2 bg-red-500 text-white rounded"
        >
          Clear Search
        </button>
      </div>
      <button
        onClick={handleApplyFormatting}
        className="p-2 bg-blue-500 text-white rounded"
      >
        Apply Formatting
      </button>
    </div>
  );
};

export default Toolbar;
