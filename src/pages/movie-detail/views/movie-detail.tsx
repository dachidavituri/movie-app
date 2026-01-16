import { useState } from "react";
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

const MovieDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: movie, isLoading } = useMovieDetails(id!);
  const { data: videos } = useMovieVideos(id!);
  const { data: similar } = useSimilarMovies(id!);

  const [showTrailer, setShowTrailer] = useState(false);

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
