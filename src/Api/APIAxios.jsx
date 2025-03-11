import axios from "axios";

const API = axios.create({
  baseURL: "https://omdbapi.com/",
});

export const getMovieDataByID = (id) => {
  return API.get(`?apikey=${import.meta.env.VITE_OMDB_APIKEY}&i=${id}`);
};

export const getMovieDataByName = (title) => {
  return API.get(`?apikey=${import.meta.env.VITE_OMDB_APIKEY}&s=${title}`);
};
