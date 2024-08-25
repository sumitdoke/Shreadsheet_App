"use client"; // Ensures client-side rendering

import React from 'react';
import { useStore } from '../store/useStore';

const Grid: React.FC = () => {
  const { cells, setCellContent, searchQuery } = useStore();
  
  const handleCellChange = (row: number, col: number, event: React.ChangeEvent<HTMLInputElement>) => {
    setCellContent(row, col, event.target.value);
  };

  return (
    <div className="grid grid-cols-[repeat(10,_minmax(0,_1fr))] auto-rows-min gap-1">
      {cells.flat().map((cell, index) => {
        const row = Math.floor(index / 10);
        const col = index % 10;
        const isSearchMatch = searchQuery && cell.content.includes(searchQuery);

        return (
          <div
            key={index}
            className={`cell ${isSearchMatch ? 'bg-yellow-100' : ''} ${cell.formatting.textAlign} ${cell.formatting.fontSize}`}
          >
            <input
              type="text"
              value={cell.content}
              onChange={(e) => handleCellChange(row, col, e)}
              className="w-full h-full"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
