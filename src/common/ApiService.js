//import axios from 'axios'

// const AxiosService = axios.create({
//     baseURL:`${import.meta.env.VITE_API_URL}`,
//     headers:{
//         'Content-Type':"application/json",
//     }
// })

// AxiosService.interceptors.request.use(config=>{
//     const token = sessionStorage.getItem('token')
//     if(token)
//         config.headers.Authorization = `Bearer ${token}`
//     return config
// })

// export default AxiosService

import axios from 'axios';

// Create an Axios instance with a base URL and default headers
const AxiosService = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include the authorization token
AxiosService.interceptors.request.use(config => {
  const token = sessionStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

export default AxiosService;
