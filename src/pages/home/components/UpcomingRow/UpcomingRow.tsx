import { useUpcomingMovies } from "@/react-query/movies";
import MovieCard from "@/pages/movies/components/MovieCard";
import Loading from "@/components/loading";
import { Carousel } from "antd";
import type { Movie } from "@/pages/movies/views/index.types";

const UpcomingRow: React.FC = () => {
  const { data, isLoading } = useUpcomingMovies();

  if (isLoading) return <Loading />;

  const movies = data?.results.slice(0, 15) || [];

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-4">🔥 Upcoming Movies</h2>
      <Carousel
        dots={false}
        arrows
        infinite
        slidesToShow={3}
        slidesToScroll={2}
        responsive={[
          { breakpoint: 768, settings: { slidesToShow: 2 } },
          { breakpoint: 480, settings: { slidesToShow: 1 } },
        ]}
      >
        {movies.map((movie: Movie) => (
          <div key={movie.id} className="px-2">
            <MovieCard movie={movie} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default UpcomingRow;
