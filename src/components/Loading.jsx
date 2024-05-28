import React from 'react';

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-12 h-12 border-8 border-black border-t-8 border-t-gray-400 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
