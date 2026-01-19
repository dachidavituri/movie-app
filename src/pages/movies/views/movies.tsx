import { useGetMovies } from "@/react-query/movies";
import MovieCard from "../components/MovieCard";
import type { Movie } from "./index.types";
import { Pagination } from "antd";
import { useSearchParams } from "react-router";
import { useEffect, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import Search from "../components/Search";
import MoviesNotFound from "../components/MoviesNotFound";
import Filter from "../components/Filter";

const Movies: React.FC = () => {
  const [selectedGenre, setSelectedGenre] = useState<number | undefined>();
  const [minRating, setMinRating] = useState<number | undefined>();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const [searched, setSearched] = useState<string>("");
  const debouncedSearched = useDebounce(searched, 1200);
  const { data: movies } = useGetMovies(
    page,
    debouncedSearched,
    selectedGenre,
    minRating,
  );

  useEffect(() => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.set("page", "1");
      return params;
    });
  }, [debouncedSearched, setSearchParams, minRating]);

  return (
    <div className="container mx-auto px-4 py-6">
      <Filter setMinRating={setMinRating} setSelectedGenre={setSelectedGenre} />
      <Search setSearched={setSearched} />
      <h1 className="text-2xl font-bold mb-6 mt-7">🔥 Popular Movies</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {movies?.results.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      {movies?.total_results === 0 && <MoviesNotFound />}
      {!debouncedSearched && (
        <div className="flex justify-center mt-10">
          <Pagination
            current={page}
            pageSize={20}
            showSizeChanger={false}
            onChange={(p) => setSearchParams({ page: String(p) })}
            total={1000}
          />
        </div>
      )}
    </div>
  );
};

export default Movies;
