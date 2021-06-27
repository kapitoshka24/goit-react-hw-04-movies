import axios from "axios";

const API_KEY = "401e10a3cb35827eef391ef83338a8ad";

const fetchTrendingMovies = () => {
  return axios
    .get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
    .then(({ data }) => data.results);
};

const fetchMovies = (movieId) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&append_to_response=credits,reviews`
    )
    .then(({ data }) => data);
};

const findMovies = (query) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
    )
    .then(({ data }) => data.results);
};

export { fetchTrendingMovies, fetchMovies, findMovies };
