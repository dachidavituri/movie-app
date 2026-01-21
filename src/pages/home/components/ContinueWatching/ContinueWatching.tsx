import { useContinueWatching } from "@/hooks/useContinueWathing";
import { useSlidesCount } from "@/hooks/useSlidesCount";
import MovieCard from "@/pages/movies/components/MovieCard";
import { Carousel } from "antd";

const ContinueWatchingRow: React.FC = () => {
  const movies = useContinueWatching();
  const slidesToShow = useSlidesCount(5);

  if (!movies.length) return null;

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-4">▶ Continue Watching</h2>

      <Carousel
        dots={false}
        arrows
        infinite
        slidesToShow={slidesToShow}
        slidesToScroll={1}
      >
        {movies.map((movie) => (
          <div key={movie.id} className="px-2">
            <MovieCard movie={movie} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ContinueWatchingRow;
