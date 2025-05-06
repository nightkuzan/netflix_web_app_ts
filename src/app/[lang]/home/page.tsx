"use client";

import { useEffect, useState } from "react";
import { Show } from "@/domain/entities/Show";
import ShowList from "@/components/Show/ShowList";
import HorizontalNav from "@/components/Navigation/HorizontalNav";
import HeroSection from "@/components/HeroSection";

const ShowsPage = () => {
  const [shows, setShows] = useState<Show[]>([]);

  useEffect(() => {
    const fetchShows = async () => {
      const response = await fetch("/api/shows");
      const data = await response.json();
      setShows(data);
    };

    fetchShows();
  }, []);

  return (
    <div className="bg-[#141414] min-h-screen text-white overflow-x-hidden scrollbar-hide">
      <HorizontalNav />
      <main>
        <HeroSection />
        <div className="px-4 md:px-12 pb-24 md:pb-12 relative z-10 -mt-20 md:-mt-64">
          <ShowList title="Popular on Netflix" shows={shows} />
          <ShowList title="Continue Watching" shows={shows} />
          <ShowList title="New Releases" shows={shows} />
        </div>
      </main>
    </div>
  );
};
export default ShowsPage;
