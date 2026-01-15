import type { Movie } from "@/pages/movies/views/index.types";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const FAVORITES_KEY = "favoriteMovies";

let listeners: ((favorites: Movie[]) => void)[] = [];

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<Movie[]>(() => {
    const stored = localStorage.getItem(FAVORITES_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    const listener = (updated: Movie[]) => setFavorites(updated);
    listeners.push(listener);

    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  }, []);

  const notify = (updated: Movie[]) => {
    listeners.forEach((l) => l(updated));
  };

  const addFavorite = (movie: Movie) => {
    if (!favorites.find((m) => m.id === movie.id)) {
      const updated = [...favorites, movie];
      setFavorites(updated);
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
      notify(updated);
      toast.success(`${movie.title} added to favorites!`);
    }
  };

  const removeFavorite = (movieId: number) => {
    const movieToRemove = favorites.find((m) => m.id === movieId);
    const updated = favorites.filter((m) => m.id !== movieId);
    setFavorites(updated);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
    notify(updated);
    if (movieToRemove) {
      toast.error(`${movieToRemove.title} removed from favorites`);
    }
  };

  const isFavorite = (movieId: number) =>
    favorites.some((m) => m.id === movieId);

  return { favorites, addFavorite, removeFavorite, isFavorite };
};
