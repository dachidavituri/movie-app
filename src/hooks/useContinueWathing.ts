import {
  type ContinueWatchingMovie,
  CONTINUE_KEY,
} from "@/pages/movie-detail/views/index.types";
import { useState, useEffect } from "react";

export const useContinueWatching = () => {
  const [list, setList] = useState<ContinueWatchingMovie[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(CONTINUE_KEY) || "[]");
    setList(data);
  }, []);

  return list;
};
