import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import {
  Star,
  Clock,
  Calendar,
  Globe,
  EyeOff,
  Play,
  Heart,
  HeartOff,
  ArrowLeft,
} from "lucide-react";

import { useFavorites } from "@/hooks/useFavorites";
import type { MovieHeroProps } from "./index.types";

const IMAGE = "https://image.tmdb.org/t/p/original";

const MovieHero: React.FC<MovieHeroProps> = ({
  movie,
  trailerKey,
  onShowTrailer,
}) => {
  const navigate = useNavigate();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const favoriteMovie = {
    id: movie.id,
    title: movie.title,
    poster_path: movie.poster_path,
    release_date: movie.release_date,
    vote_average: movie.vote_average,
  };

  const favorite = isFavorite(movie.id);

  return (
    <div
      className="relative w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${IMAGE}${movie.backdrop_path})` }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-10 py-6 flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center">
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          src={`${IMAGE}${movie.poster_path}`}
          className="w-full max-w-xs sm:max-w-70 rounded-xl shadow-xl mx-auto md:mx-0"
        />

        <div className="text-white space-y-3 flex-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            {movie.title}
          </h1>
          {movie.original_title !== movie.title && (
            <p className="opacity-70 text-sm sm:text-base">
              Original: {movie.original_title}
            </p>
          )}

          <div className="flex flex-wrap gap-2">
            {movie.genres.map((g: any) => (
              <span
                key={g.id}
                className="px-2 py-1 bg-white/20 rounded-full text-xs sm:text-sm"
              >
                {g.name}
              </span>
            ))}
          </div>

          <p className="text-sm sm:text-base md:text-base opacity-90 max-w-full sm:max-w-xl md:max-w-2xl">
            {movie.overview}
          </p>

          <div className="flex flex-wrap gap-4 text-xs sm:text-sm md:text-base items-center">
            <span className="flex items-center gap-1">
              <Star size={16} className="text-yellow-400" />{" "}
              {movie.vote_average.toFixed(1)} ({movie.vote_count})
            </span>
            <span className="flex items-center gap-1">
              <Clock size={16} /> {movie.runtime} min
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={16} /> {movie.release_date}
            </span>
            <span className="flex items-center gap-1">
              <Globe size={16} /> {movie.original_language.toUpperCase()}
            </span>
            {movie.adult && (
              <span className="flex items-center gap-1">
                <EyeOff size={16} /> Adult
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-3 mt-3">
            {trailerKey && (
              <button
                onClick={onShowTrailer}
                className="flex items-center gap-1 px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 text-xs sm:text-sm md:text-base cursor-pointer"
              >
                <Play size={16} /> Watch Trailer
              </button>
            )}

            <button
              onClick={() =>
                favorite ? removeFavorite(movie.id) : addFavorite(favoriteMovie)
              }
              className="flex items-center gap-1 px-4 py-2 bg-white/10 rounded-lg text-xs sm:text-sm md:text-base cursor-pointer hover:bg-white/5"
            >
              {favorite ? (
                <HeartOff size={16} />
              ) : (
                <Heart size={16} className="text-red-500" />
              )}
              {favorite ? " Remove Favorite" : " Add Favorite"}
            </button>

            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-1 px-4 py-2 bg-white/10 rounded-lg text-xs sm:text-sm md:text-base hover:bg-white/5 cursor-pointer"
            >
              <ArrowLeft size={16} /> Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieHero;
