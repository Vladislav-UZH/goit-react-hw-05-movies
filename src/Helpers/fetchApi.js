import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const apiKey = '76cbb606f190fc237086ec33f1fd98a3';
const fetchDayTrend = async (endpoints = `trending/movie/week`) => {
  const resp = await axios.get(`${endpoints}?api_key=${apiKey}`);
  return resp.data;
};
const fetchMovieByQuery = async query => {
  const resp = await axios.get(
    `search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  return resp.data;
};
const fetchMovieDetsById = async (id, detailEndpoint = '') => {
  const resp = await axios.get(
    `movie/${id}${detailEndpoint}?api_key=${apiKey}&language=en-US`
  );
  return resp.data;
};
export { fetchDayTrend, fetchMovieByQuery, fetchMovieDetsById };
