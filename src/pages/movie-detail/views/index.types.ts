export interface ContinueWatchingMovie {
  id: number;
  title: string;
  poster_path: string | null;
  backdrop_path: string | null;
  lastWatchedAt: number;
  release_date: string;
  vote_average: number;
}

export const CONTINUE_KEY = "continue_watching_movies";
