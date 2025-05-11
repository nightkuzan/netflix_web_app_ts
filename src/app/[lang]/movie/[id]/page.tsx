"use client";

import { useEffect, useState } from "react";
import { Show } from "@/domain/entities/Show";
import HorizontalNav from "@/components/Navigation/HorizontalNav";
import MovieDetail from "@/components/Show/Detail";
import DetailLoadingSkeleton from "@/components/Show/Skeleton/DetailLoadingSkeleton";
import ErrorSkeleton from "@/components/Show/Skeleton/ErrorSkeleton";
import { useParams } from "next/navigation";
import { useDictionaries } from "@core/contexts/dictionariesContext";

const ShowsPage = () => {
  const [show, setShow] = useState<Show | null>(null);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const dictionaries = useDictionaries(); // Get the dictionaries
  const text = dictionaries.text || {};

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
        setHasError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchShowById();
  }, [id]);

  if (loading) {
    return (
      <div className="bg-[#141414] min-h-screen text-white overflow-x-hidden">
        <HorizontalNav />
        <main>
          <DetailLoadingSkeleton />
        </main>
      </div>
    );
  }

  if (hasError) {
    return (
      <div className="bg-[#141414] min-h-screen text-white overflow-x-hidden">
        <HorizontalNav />
        <main>
          <ErrorSkeleton />
        </main>
      </div>
    );
  }

  return (
    <div className="bg-[#141414] min-h-screen text-white overflow-x-hidden">
      <HorizontalNav />
      <main>{show && <MovieDetail movie={show} />}</main>
    </div>
  );
};

export default ShowsPage;
