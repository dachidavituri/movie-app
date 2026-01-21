import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "@/components/loading";
import {
  useMovieDetails,
  useMovieVideos,
  useSimilarMovies,
} from "@/react-query/movies";
import MovieHero from "../components/movie-hero";
import SimilarMovies from "../components/similar-movies";
import TrailerModal from "../components/trailer-modal";
import { type ContinueWatchingMovie, CONTINUE_KEY } from "./index.types";

const MovieDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: movie, isLoading } = useMovieDetails(id!);
  const { data: videos } = useMovieVideos(id!);
  const { data: similar } = useSimilarMovies(id!);

  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    if (!movie) return;

    const list: ContinueWatchingMovie[] = JSON.parse(
      localStorage.getItem(CONTINUE_KEY) || "[]",
    );

    const filtered = list.filter((m) => m.id !== movie.id);

    const updated = [
      {
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        backdrop_path: movie.backdrop_path,
        lastWatchedAt: Date.now(),
        release_date: movie.release_date,
        vote_average: movie.vote_average,
      },
      ...filtered,
    ].slice(0, 10);

    localStorage.setItem(CONTINUE_KEY, JSON.stringify(updated));
  }, [movie]);

  if (isLoading) return <Loading />;
  if (!movie) return null;

  const trailer =
    videos?.results.find((v) => v.type === "Trailer" && v.site === "YouTube") ||
    videos?.results.find((v) => v.site === "YouTube");

  return (
    <div className="min-h-screen">
      <MovieHero
        movie={movie}
        trailerKey={trailer?.key}
        onShowTrailer={() => setShowTrailer(true)}
      />

      <SimilarMovies movies={similar?.results || []} />

      {trailer && (
        <TrailerModal
          show={showTrailer}
          trailerKey={trailer.key}
          onClose={() => setShowTrailer(false)}
        />
      )}
    </div>
  );
};

export default MovieDetail;
