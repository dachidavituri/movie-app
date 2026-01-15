import { Link } from "react-router";
import type { MovieCardProps } from "./index.types";
import { motion } from "framer-motion";

const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link to={`/movie/${movie.id}`} className="group">
        <div className="bg-base-200 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">
          <div className="relative overflow-hidden">
            <img
              src={
                movie.poster_path
                  ? IMAGE_BASE + movie.poster_path
                  : "https://via.placeholder.com/500x750?text=No+Image"
              }
              alt={movie.title}
              className="w-full h-90 object-cover group-hover:scale-105 transition-transform duration-300"
            />

            <div className="absolute top-3 right-3 bg-black/80 text-white px-2 py-1 rounded-lg text-sm font-semibold">
              ⭐ {movie.vote_average.toFixed(1)}
            </div>
          </div>

          <div className="p-4">
            <h3 className="font-bold text-sm line-clamp-2 min-h-10">
              {movie.title}
            </h3>

            <div className="flex justify-between items-center mt-2 text-xs opacity-70">
              <span>{movie.release_date?.slice(0, 4)}</span>
              <span>View details →</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default MovieCard;
