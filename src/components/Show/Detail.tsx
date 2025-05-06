"use client";

import { useParams } from "next/navigation";
import React from "react";
import { ChevronLeft, Play, Info, Star } from "lucide-react";
import { useIsMobile } from "@hooks/use-mobile";
import Button from "@mui/material/Button";
import shimmer from "@assets/shimmer.png";
import { Show } from "@/domain/entities/Show";

type Props = {
  movie: Show;
};

const MovieDetail: React.FC<Props> = ({ movie }) => {
  const isMobile = useIsMobile();

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="bg-[#141414] min-h-screen text-white">
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src={movie.backdropUrl}
            alt="Main Show Background"
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = shimmer.src;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/20" />
        </div>

        <Button
          onClick={handleBack}
          className="absolute top-32 left-4 z-20 flex items-center text-white hover:text-gray-300 hover:cursor-pointer"
          size={isMobile ? "small" : "medium"}
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          <span className="text-sm">Back</span>
        </Button>

        <div className="relative z-10 h-full flex flex-col justify-end md:justify-center px-4 sm:px-6 md:px-12 pb-10 md:pb-20 pt-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
            {movie.title}
          </h1>

          <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-gray-300">
            {movie.releaseYear && <span>{movie.releaseYear}</span>}
            {movie.rating && (
              <div className="flex items-center">
                <Star
                  className="h-4 w-4 text-yellow-500 mr-1"
                  fill="currentColor"
                />
                <span>{movie.rating}/10</span>
              </div>
            )}
            {movie.duration && <span>{movie.duration}</span>}
          </div>

          {movie.genres && (
            <div className="flex flex-wrap gap-2 mb-4">
              {movie.genres.map((g, index) => (
                <span
                  key={index}
                  className="bg-gray-800 text-white text-xs px-2 py-1 rounded"
                >
                  {g}
                </span>
              ))}
            </div>
          )}

          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mb-6">
            {movie.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button
              className="bg-white text-black hover:bg-white/90"
              fullWidth={isMobile}
            >
              <Play className="h-5 w-5 mr-2" fill="black" /> Play
            </Button>
            <Button
              className="border border-gray-400 text-white"
              fullWidth={isMobile}
            >
              <Info className="h-5 w-5 mr-2" /> More Info
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
