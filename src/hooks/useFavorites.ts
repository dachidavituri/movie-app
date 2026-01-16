import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const FAVORITES_KEY = "favoriteMovies";

export interface FavoriteMovie {
  id: number;
  title: string;
  poster_path: string | null;
  release_date: string;
  vote_average: number;
}

let listeners: ((favorites: FavoriteMovie[]) => void)[] = [];

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<FavoriteMovie[]>(() => {
    const stored = localStorage.getItem(FAVORITES_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    const listener = (updated: FavoriteMovie[]) => setFavorites(updated);
    listeners.push(listener);

    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  }, []);

  const notify = (updated: FavoriteMovie[]) => {
    listeners.forEach((l) => l(updated));
  };

  const addFavorite = (movie: FavoriteMovie) => {
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
