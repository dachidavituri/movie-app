import { useFavorites } from "@/hooks/useFavorites";
import MovieCard from "@/pages/movies/components/MovieCard";

const Favorites: React.FC = () => {
  const { favorites } = useFavorites();

  if (favorites.length === 0)
    return (
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">❤️ Favorites</h1>
        <p>No favorite movies yet.</p>
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">❤️ Favorites</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {favorites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
