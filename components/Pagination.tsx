import React from 'react';

const Pagination: React.FC = () => {
  return (
    <div className="flex justify-between mt-4">
      <button className="border p-2 bg-gray-200">Previous</button>
      <button className="border p-2 bg-gray-200">Next</button>
    </div>
  );
};

export default Pagination;
