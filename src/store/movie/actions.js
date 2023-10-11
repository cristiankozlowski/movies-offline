import axios from "axios";

const theMovieDB = axios.create({ baseURL: process.env.THE_MOVIE_DB })
const apiKey = process.env.API_KEY;

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
