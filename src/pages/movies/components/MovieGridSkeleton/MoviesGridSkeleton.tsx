import MovieCardSkeleton from "../MovieCardSkeleton";

type Props = {
  count?: number;
};

const MoviesGridSkeleton: React.FC<Props> = ({ count = 10 }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <MovieCardSkeleton key={i} />
      ))}
    </div>
  );
};

export default MoviesGridSkeleton;
