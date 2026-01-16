import { useQuery } from "@tanstack/react-query";
import { MOVIES_QUERY_KEYS } from "./enum";
import {
  getMovieDetails,
  getMovies,
  getMovieVideos,
  getSimilarMovies,
} from "@/api/movies";
import type {
  MovieDetails,
  MoviesResponse,
  MovieVideosResponse,
} from "@/api/movies/index.types";

export const useGetMovies = (page: number = 1) => {
  return useQuery<MoviesResponse>({
    queryKey: [MOVIES_QUERY_KEYS.MOVIES, page],
    queryFn: () => getMovies(page),
  });
};

export const useMovieDetails = (id: string) => {
  return useQuery<MovieDetails>({
    queryKey: [MOVIES_QUERY_KEYS.MOVIE_DETAIL, id],
    queryFn: () => getMovieDetails(id),
    enabled: !!id,
  });
};

export const useMovieVideos = (id: string) => {
  return useQuery<MovieVideosResponse>({
    queryKey: [MOVIES_QUERY_KEYS.MOVIE_VIDEOS, id],
    queryFn: () => getMovieVideos(id),
    enabled: !!id,
  });
};

export const useSimilarMovies = (id: string) => {
  return useQuery<MoviesResponse>({
    queryKey: [MOVIES_QUERY_KEYS.MOVIE_SIMILAR, id],
    queryFn: () => getSimilarMovies(id),
    enabled: !!id,
  });
};
