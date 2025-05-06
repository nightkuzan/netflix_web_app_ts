"use client";

import { useEffect, useState } from "react";
import { Show } from "@/domain/entities/Show";
import HorizontalNav from "@/components/Navigation/HorizontalNav";
import MovieDetail from "@/components/Show/Detail";
import DetailSkeleton from "@/components/Show/Skeleton/DetailSkeleton";
import { useParams } from "next/navigation";

const ShowsPage = () => {
  const [show, setShow] = useState<Show | null>(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const id = params?.id as string;

  useEffect(() => {
    const fetchShowById = async () => {
      if (!id) return;
      try {
        setLoading(true);
        const response = await fetch(`/api/shows/${id}`);
        const data: Show = await response.json();
        setShow(data);
      } catch (error) {
        console.error("Failed to fetch show:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchShowById();
  }, [id]);

  return (
    <div className="bg-[#141414] min-h-screen text-white overflow-x-hidden">
      <HorizontalNav />
      <main>
        {loading ? (
          <DetailSkeleton />
        ) : show ? (
          <MovieDetail movie={show} />
        ) : (
          <p className="p-8 text-center text-gray-400">Show not found.</p>
        )}
      </main>
    </div>
  );
};

export default ShowsPage;
