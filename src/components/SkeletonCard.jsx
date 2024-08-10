import React from 'react';

const SkeletonCard = () => {
  return (
    <div className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 animate-pulse">
      <div className="h-48 bg-gray-300 rounded-t-lg dark:bg-gray-700"></div>
      <div className="p-5">
        <div className="h-8 bg-gray-300 rounded-md dark:bg-gray-700 mb-2"></div>
        <aside className="flex justify-center text-center items-center gap-4">
          <div className="h-10 bg-gray-300 rounded-md dark:bg-gray-700 w-24"></div>
          <div className="h-10 bg-gray-300 rounded-md dark:bg-gray-700 w-24"></div>
        </aside>
      </div>
    </div>
  );
};

export default SkeletonCard;