import { motion } from "framer-motion";
import { Link } from "react-router";
import { Heart } from "lucide-react";
import { useFavorites, type FavoriteMovie } from "@/hooks/useFavorites";
import useCurrentLang from "@/i18n/hooks/current-lang";

const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

type Props = { movie: FavoriteMovie };

const MovieCard: React.FC<Props> = ({ movie }) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    isFavorite(movie.id) ? removeFavorite(movie.id) : addFavorite(movie);
  };

  const favorite = isFavorite(movie.id);
  const currentLang = useCurrentLang();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link
        to={`/${currentLang}/movies/${movie.id}`}
        className="group relative block"
      >
        <img
          src={
            movie.poster_path
              ? IMAGE_BASE + movie.poster_path
              : "https://via.placeholder.com/500x750?text=No+Image"
          }
          alt={movie.title}
          className="w-full aspect-2/3 object-cover rounded-xl"
        />

        <button
          onClick={toggleFavorite}
          className="absolute top-3 right-3 z-10 p-1 rounded-full bg-black/50"
        >
          <Heart
            className={`w-6 h-6 transition-colors duration-300 cursor-pointer ${
              favorite ? "text-red-500" : "text-white"
            }`}
            fill={favorite ? "currentColor" : "none"}
          />
        </button>

        <div className="mt-2">
          <h3 className="font-bold text-sm line-clamp-2">{movie.title}</h3>
          <div className="flex justify-between text-xs opacity-70">
            <span>{movie.release_date?.slice(0, 4)}</span>
            <span>⭐ {movie.vote_average.toFixed(1)}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default MovieCard;
