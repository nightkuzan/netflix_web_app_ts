"use client";

import React, { useEffect, useState } from "react";
import { Play, Info, Plus } from "lucide-react";
import { useIsMobile } from "@hooks/use-mobile";
import { useDictionaries } from "@core/contexts/dictionariesContext"; // Import the dictionary context
import MainShowBg from "@assets/main_show_bg.png";
import DevilInOhio from "@assets/devil_in_ohio.png";
import n from "@assets/n.png";
import series from "@assets/series.png";
import top10 from "@assets/top10.png";
import shimmer from "@assets/shimmer.png";

import HeroLoadingSkeleton from "./Show/Skeleton/HeroLoadingSkeleton";

const HeroSection = () => {
  const isMobile = useIsMobile();
  const [isLoading, setIsLoading] = useState(true);
  const dictionaries = useDictionaries(); // Get the dictionaries
  const text = dictionaries.text || {};

  useEffect(() => {
    const load = async () => {
      try {
        await new Promise((res) => setTimeout(res, 1500));
      } catch (e) {
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, []);

  if (isLoading) {
    return (
      <div className="relative w-full h-[75vh] md:h-screen overflow-hidden">
        <HeroLoadingSkeleton />
      </div>
    );
  }

  return (
    <div className="relative w-full h-[75vh] md:h-screen overflow-hidden">
      <img
        src={MainShowBg.src}
        alt="Main Show Background"
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = shimmer.src;
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/20"></div>

      <div className="relative z-10 h-full flex flex-col justify-end md:justify-center px-4 md:px-12 pb-24 md:pb-20">
        <div
          className={`flex ${
            isMobile ? "flex-col items-center" : "items-center space-x-2"
          } `}
        >
          <div className="h-25 flex items-center justify-center">
            <img
              src={n.src}
              alt="Netflix Logo"
              className="w-8 h-8 md:w-10 md:h-10 object-contain mr-2"
            />
            <img
              src={series.src}
              alt="Series Logo"
              className="w-full h-4 object-contain"
            />
          </div>
        </div>
        <div className={`flex ${isMobile ? "justify-center" : ""} mb-4`}>
          <img
            src={DevilInOhio.src}
            alt="Devil In Ohio"
            className="w-48 md:w-96"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = shimmer.src;
            }}
          />
        </div>
        <div
          className={`text-sm text-white mb-4 ${isMobile ? "text-center" : ""}`}
        >
          {isMobile ? (
            `${text.tv_mysteries} • ${text.based_on_books}`
          ) : (
            <>
              <div className="flex items-center space-x-2 mb-2">
                <img
                  src={top10.src}
                  alt="Top 10"
                  className="w-6 h-6 object-contain"
                />
                <span className="font-bold text-xl">{text.top_1_shows}</span>
              </div>
              <p className="mt-2 max-w-xl text-lg">
                {text.devil_in_ohio_description}
              </p>
            </>
          )}
        </div>
        <div
          className={`flex ${
            isMobile
              ? "flex-row items-center space-x-4"
              : "flex-row items-center space-x-3"
          }`}
        >
          {isMobile && (
            <button className="bg-transparent text-white px-4 py-2 rounded flex items-center font-semibold transition hover:bg-white/10">
              <Plus className="h-5 w-5 mr-2" />
              {text.my_list}
            </button>
          )}

          <button className="bg-white text-black px-5 py-2 md:py-3 rounded flex items-center font-semibold hover:bg-opacity-90 transition">
            <Play className="h-5 w-5 mr-2" fill="black" />
            {text.play}
          </button>

          <button
            className={`${
              isMobile
                ? "bg-transparent text-white px-4 py-2"
                : "bg-gray-600/70 text-white px-6 py-3 hover:bg-gray-600/90"
            } rounded flex items-center font-semibold transition`}
          >
            <Info className="h-5 w-5 mr-2" />
            {isMobile ? text.info : text.more_info}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
