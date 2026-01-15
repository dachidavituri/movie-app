import type { Movie } from "@/pages/movies/views/index.types";

export interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
