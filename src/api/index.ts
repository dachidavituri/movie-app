import axios, { type CreateAxiosDefaults } from "axios";

const axiosConfigMovies: CreateAxiosDefaults = {
  baseURL: import.meta.env.VITE_MOVIES_URL,
  params: {
    api_key: import.meta.env.VITE_MOVIES_API_KEY,
    language: "en-US",
  },
};

export const httpMoviesClient = axios.create(axiosConfigMovies);
