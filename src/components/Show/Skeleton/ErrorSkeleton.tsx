"use client";

import React from "react";
import { useDictionaries } from "@core/contexts/dictionariesContext";
import Button from "@mui/material/Button";
import { ChevronLeft } from "lucide-react";

const ErrorSkeleton = () => {
  const dictionaries = useDictionaries();
  const text = dictionaries.text || {};

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="flex items-center justify-center min-h-[70vh] relative p-6">
      <div className="flex items-center flex-col text-center">
        <div className="flex flex-col gap-2 mb-6">
          <h1 className="font-medium text-4xl md:text-5xl text-red-600">
            {text.error || "Error"}
          </h1>
          <h2 className="text-xl md:text-2xl text-white">
            {text.unable_to_load || "Unable to load content"}
          </h2>
          <p className="pt-2 text-gray-400">
            {text.try_again_later || "Please try again later"}
          </p>
        </div>
        <Button
          onClick={handleBack}
          variant="contained"
          className="bg-white text-black hover:bg-white/90 mt-4"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          {text.back}
        </Button>
      </div>
    </div>
  );
};

export default ErrorSkeleton;
