import axios from 'axios';

const axiosFilms = axios.create({baseURL: 'http://api.tvmaze.com'});

export default axiosFilms;