import { useGetMovies } from "@/react-query/movies";
import MovieCard from "../components/MovieCard";
import type { Movie } from "./index.types";
import { Pagination } from "antd";
import { useSearchParams } from "react-router";

const Movies: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const { data: movies } = useGetMovies(page);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">🔥 Popular Movies</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {movies?.results.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Pagination
          current={page}
          pageSize={20}
          showSizeChanger={false}
          onChange={(p) => setSearchParams({ page: String(p) })}
          total={1000}
        />
      </div>
    </div>
  );
};

export default Movies;
