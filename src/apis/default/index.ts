import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://13.209.141.103:8080',
});

export default instance;
