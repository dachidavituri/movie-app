import { httpMoviesClient } from "..";
import type {
  MovieDetails,
  MoviesResponse,
  MovieVideosResponse,
} from "./index.types";

export const getMovies = async (page: number = 1): Promise<MoviesResponse> => {
  const response = await httpMoviesClient.get("/movie/popular", {
    params: { page },
  });
  return response.data;
};

export const searchMovies = async (
  query: string,
  page: number = 1,
): Promise<MoviesResponse> => {
  const response = await httpMoviesClient.get("/search/movie", {
    params: {
      query,
      page,
      include_adult: false,
    },
  });
  return response.data;
};

export const getMovieDetails = async (id: string): Promise<MovieDetails> => {
  const res = await httpMoviesClient.get(`/movie/${id}`);
  return res.data;
};

export const getMovieVideos = async (
  id: string,
): Promise<MovieVideosResponse> => {
  const res = await httpMoviesClient.get(`/movie/${id}/videos`);
  return res.data;
};

export const getSimilarMovies = async (id: string): Promise<MoviesResponse> => {
  const res = await httpMoviesClient.get(`/movie/${id}/similar`);
  return res.data;
};
