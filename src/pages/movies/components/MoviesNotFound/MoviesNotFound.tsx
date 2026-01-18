const MoviesNotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center opacity-80 mx-auto">
      <span className="text-6xl mb-4">🎬</span>
      <h2 className="text-2xl font-bold mb-2">No movies found</h2>
      <p className="text-gray-500 dark:text-gray-400 max-w-md">
        We couldn’t find any movies matching your search or filters. Try
        changing keywords or removing some filters.
      </p>
    </div>
  );
};

export default MoviesNotFound;
