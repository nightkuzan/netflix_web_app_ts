import React from "react";

const HeroLoadingSkeleton = () => {
  return (
    <div className="relative w-full h-[75vh] md:h-screen bg-gray-900 animate-pulse">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/20"></div>
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-4">
        <div className="w-24 h-24 bg-gray-700 rounded-full mb-4" />
        <div className="w-48 h-6 bg-gray-700 rounded mb-2" />
        <div className="w-64 h-4 bg-gray-700 rounded mb-2" />
        <div className="w-40 h-10 bg-gray-600 rounded mt-6" />
      </div>
    </div>
  );
};

export default HeroLoadingSkeleton;
