import React from "react";

const DetailLoadingSkeleton = () => {
  return (
    <div className="p-6 space-y-6 animate-pulse mt-32">
      <div className="w-full h-[300px] bg-neutral-800 rounded-xl shadow-lg" />

      <div className="h-8 bg-neutral-700 rounded w-1/3" />

      <div className="h-5 bg-neutral-700 rounded w-1/4" />

      <div className="space-y-2">
        <div className="h-4 bg-neutral-700 rounded w-full" />
        <div className="h-4 bg-neutral-700 rounded w-5/6" />
        <div className="h-4 bg-neutral-700 rounded w-3/4" />
      </div>

      <div className="flex space-x-4 pt-4">
        <div className="h-10 w-24 bg-neutral-700 rounded-full" />
        <div className="h-10 w-28 bg-neutral-700 rounded-full" />
      </div>
    </div>
  );
};

export default DetailLoadingSkeleton;
