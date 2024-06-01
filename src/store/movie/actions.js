import axios from "axios";
import { apiKey } from "../../config/key.js";

const theMovieDB = axios.create({ baseURL: process.env.THE_MOVIE_DB })

export async function getPopularMovies({ commit }) {
  await theMovieDB
    .get("/movie/popular", {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    })
    .then((response) => {
      commit("SET_MOVIE_POPULAR", response.data.results);
    });
}
