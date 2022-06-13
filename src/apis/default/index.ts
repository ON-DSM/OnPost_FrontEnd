import axios from 'axios';
import { clearStorege } from '../../utils/token';

const instance = axios.create({
  baseURL: 'http://13.209.141.103:8080',
});

axios.interceptors.request.use(
  async config => {
    const accessToken = typeof window !== "undefined" ? sessionStorage.getItem("accessToken") : null;
    config.headers = { 
      'Authorization': `Bearer ${accessToken}`,
      'Accept': 'application/json',
    }
    console.log("됌")
    return config;
  },
  error => {
    if(error.request.status === 401)
    console.log("오맨")
    Promise.reject(error)
});
 
// Response interceptor for API calls
axios.interceptors.response.use((response) => {
  return response
}, async function (error) {
  const originalRequest = error.config;
  if (error.response.status === 401) {
    console.log('토큰 만료');
    clearStorege
    window.location.reload()
  }
  return Promise.reject(error);
});


export default instance;
