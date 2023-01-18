import axios from 'axios';
// const API_KEY = '7653694c4941db1f3bfb7af19c86b9a8';
// const BASE_URL = 'https://api.themoviedb.org/3';

// export async function fetchPopularMovies(page) {
//   const url = `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&language=en-US&page=${page}`;
//   const response = await axios(url);
//   return response.data.results;
// }

const API_KEY = '7653694c4941db1f3bfb7af19c86b9a8';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
  // page: 1,
  
};

// https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>

// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false

// export const fetchPopularMovies = async (page) => {
//   const { data } = await axios.get(`/trending/movie/week?page=${page}`);
//   return data.results;
// };


export const fetchPopularMovies = async (page) => {
  const {data} = await axios.get(`/trending/movie/week?page=${page}`);
  return data;
};
export const fetchMovieToSearch = async (searchQuery, page) => {
  const { data } = await axios.get(
    `/search/movie?&query=${searchQuery}&page=${page}`
  );
  return data;
};

export const fetchMovieById = async id => {
  const { data } = await axios.get(`/movie/${id}?`);
  // console.log(data);
  return data;
};

export const fetchCast = async id => {
  const { data } = await axios.get(`/movie/${id}/credits?`);
  // console.log(data.cast);
  return data.cast;
};

// fetchCast(76600);
export const fetchReviews = async id => {
  const { data } = await axios.get(`/movie/${id}/reviews?`);
  // console.log(data.results);
  return data.results;
};

// fetchReviews(76600);