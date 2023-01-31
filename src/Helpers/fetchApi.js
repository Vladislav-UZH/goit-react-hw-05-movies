import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const apiKey = '76cbb606f190fc237086ec33f1fd98a3';
export const fetchApi = async (endpoints = `trending/movie/week`) => {
  const resp = await axios.get(`${endpoints}?api_key=${apiKey}`);
  return resp.data;
};
//     class fetchApi{
//     constructor(key) {
//         this.key = key
//         this.
//     }
// }
