import axios from 'axios';

const token = window.localStorage.getItem('token');

const http = axios.create({
  baseURL: '/api',
  headers: {
    Authorization: `Bearer ${token}`,
    'X-Application-Name': 'react',
    'Content-Type': 'application/json',
  },
});

export default http;

// axios.interceptors.response.use(
//   response => response,
//   error => {
//     const statusCode = error.response.status;
//
//     if (statusCode === 401) {
//       return new Promise(() => {});
//     }
//     if (statusCode === 403) {
//       return new Promise(() => {});
//     }
//
//     return Promise.reject(error);
//   },
// );
