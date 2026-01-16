import MovieCard from "@/pages/movies/components/MovieCard";
import type { SimilarMoviesProps } from "./index.types";

const SimilarMovies: React.FC<SimilarMoviesProps> = ({ movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-10 py-6">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
        Similar Movies
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
        {movies.map((m) => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </div>
    </div>
  );
};

export default SimilarMovies;
