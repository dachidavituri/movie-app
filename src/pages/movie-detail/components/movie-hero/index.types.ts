import type { MovieDetails } from "@/api/movies/index.types";

export interface MovieHeroProps {
  movie: MovieDetails;
  trailerKey?: string;
  onShowTrailer: () => void;
}
