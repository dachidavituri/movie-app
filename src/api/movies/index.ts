import { httpMoviesClient } from "..";
import type { MoviesResponse } from "./index.types";

export const getMovies = async (page: number = 1): Promise<MoviesResponse> => {
  const response = await httpMoviesClient.get("/movie/popular", {
    params: { page },
  });
  return response.data;
};
