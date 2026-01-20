import { httpMoviesClient } from "..";
import type {
  GenresResponse,
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

export const getGenres = async (): Promise<GenresResponse> => {
  const res = await httpMoviesClient.get("/genre/movie/list");
  return res.data;
};

export const discoverMovies = async (params: {
  page: number;
  genre?: number;
  minRating?: number;
}): Promise<MoviesResponse> => {
  const res = await httpMoviesClient.get("/discover/movie", {
    params: {
      page: params.page,
      with_genres: params.genre,
      "vote_average.gte": params.minRating,
      sort_by: "popularity.desc",
    },
  });

  return res.data;
};

export const getTrengingMovies = async () => {
  const response = await httpMoviesClient.get("/trending/movie/day");
  return response.data;
};

export const getTopRatedMovies = async () => {
  const response = await httpMoviesClient.get("/movie/top_rated");
  return response.data;
};

export const getUpcomingMovies = async () => {
  const response = await httpMoviesClient.get("/movie/upcoming");
  return response.data;
};
