import { useQuery } from "@tanstack/react-query";
import { MOVIES_QUERY_KEYS } from "./enum";
import {
  discoverMovies,
  getGenres,
  getMovieDetails,
  getMovies,
  getMovieVideos,
  getSimilarMovies,
  getTopRatedMovies,
  getTrengingMovies,
  searchMovies,
} from "@/api/movies";
import type {
  GenresResponse,
  MovieDetails,
  MoviesResponse,
  MovieVideosResponse,
} from "@/api/movies/index.types";

export const useGetMovies = (
  page: number = 1,
  search?: string,
  genre?: number,
  minRating?: number,
) => {
  return useQuery<MoviesResponse>({
    queryKey: [MOVIES_QUERY_KEYS.MOVIES, page, search, genre, minRating],
    queryFn: () => {
      if (search && search.trim() !== "") {
        return searchMovies(search, page);
      }
      if (genre || minRating) {
        return discoverMovies({ page, genre, minRating });
      }
      return getMovies(page);
    },
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

export const useGenres = () => {
  return useQuery<GenresResponse>({
    queryKey: [MOVIES_QUERY_KEYS.GENRES],
    queryFn: getGenres,
  });
};

export const useTrendingMovies = () => {
  return useQuery({
    queryKey: [MOVIES_QUERY_KEYS.TRENDING],
    queryFn: getTrengingMovies,
  });
};

export const useTopRatedMovies = () => {
  return useQuery({
    queryKey: [MOVIES_QUERY_KEYS.TOPRATED],
    queryFn: getTopRatedMovies,
  });
};
