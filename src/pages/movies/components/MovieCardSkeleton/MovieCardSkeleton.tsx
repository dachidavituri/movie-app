import { motion } from "framer-motion";

const MovieCardSkeleton: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
      className="bg-base-200 rounded-xl overflow-hidden shadow-md"
    >
      <div className="w-full h-90 bg-base-300 animate-pulse" />

      <div className="p-4 space-y-3">
        <div className="h-4 bg-base-300 rounded w-3/4 animate-pulse" />
        <div className="h-3 bg-base-300 rounded w-1/2 animate-pulse" />
      </div>
    </motion.div>
  );
};

export default MovieCardSkeleton;
