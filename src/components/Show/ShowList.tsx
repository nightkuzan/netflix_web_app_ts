import { useDictionaries } from "@core/contexts/dictionariesContext";
import { Show } from "@/domain/entities/Show";
import { useIsMobile } from "@hooks/use-mobile";
import shimmer from "@assets/shimmer.png";

type Props = {
  title: string | undefined;
  shows: Show[];
};

const ShowList: React.FC<Props> = ({ title, shows }) => {
  const dictionaries = useDictionaries();
  const locale = dictionaries.locale as string;
  const isMobile = useIsMobile();

  // Helper function to get localized show title
  const getLocalizedTitle = (show: Show): string => {
    if (show.translations && show.translations[locale]) {
      return show.translations[locale].title;
    }
    return show.title;
  };

  const handleShowClick = (showId: string) => {
    if (!showId) return;
    window.location.href = `/${locale}/movie/${showId}`;
  };

  const isLoading = shows.length === 0;

  const shimmerCount = isMobile ? 4 : 6;

  return (
    <div className="mb-8 md:mb-12 mt-12 md:mt-0">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
        {title}
      </h2>

      <div
        className="
          flex 
          gap-3 
          overflow-x-auto 
          pb-4 
          snap-x 
          snap-mandatory 
          scrollbar-hide
        "
      >
        {isLoading
          ? Array.from({ length: shimmerCount }).map((_, index) => (
              <div
                key={index}
                className="
                  min-w-[200px] 
                  max-w-[80%] 
                  md:min-w-[320px] 
                  md:max-w-[400px] 
                  relative 
                  snap-start 
                  rounded 
                  overflow-hidden 
                  bg-gray-800
                  animate-pulse
                "
              >
                <img
                  src={shimmer.src}
                  alt="Loading..."
                  className={`w-full object-cover ${
                    isMobile ? "aspect-[3/4]" : "aspect-video"
                  } rounded`}
                />
              </div>
            ))
          : shows.map((show) => (
              <div
                key={show.id}
                className="
                  min-w-[200px] 
                  max-w-[80%] 
                  md:min-w-[320px] 
                  md:max-w-[400px] 
                  relative 
                  snap-start 
                  rounded 
                  overflow-hidden 
                  group 
                  cursor-pointer 
                  transition-transform 
                  duration-300 
                  transform 
                  hover:scale-105
                "
                onClick={() => handleShowClick(show.id)}
              >
                <div className="w-full">
                  <img
                    src={show.backdropUrl}
                    alt={getLocalizedTitle(show)}
                    className={`w-full object-cover rounded ${
                      isMobile ? "aspect-[3/4]" : "aspect-video"
                    }`}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = shimmer.src;
                    }}
                  />
                </div>

                {show.tag && (
                  <div className="absolute top-0 right-0 bg-red-600 text-white text-xs px-2 py-1">
                    {show.tag}
                  </div>
                )}

                <div
                  className={`absolute inset-0 bg-black/60 opacity-0 ${
                    isMobile ? "" : "group-hover:opacity-100"
                  } flex items-center justify-center transition-opacity`}
                >
                  <span className="text-white text-sm md:text-lg font-medium text-center px-2">
                    {getLocalizedTitle(show)}
                  </span>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default ShowList;
