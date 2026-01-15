import { useQuery } from "@tanstack/react-query";
import { MOVIES_QUERY_KEYS } from "./enum";
import { getMovies } from "@/api/movies";
import type { MoviesResponse } from "@/api/movies/index.types";

export const useGetMovies = (page: number = 1) => {
  return useQuery<MoviesResponse>({
    queryKey: [MOVIES_QUERY_KEYS.MOVIES, page],
    queryFn: () => getMovies(page),
  });
};
