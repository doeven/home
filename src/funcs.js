import axios from 'axios';
export const sayhello = ()=>{ console.log('Funcs Loaded!');}

// My Axios Connection
export const http = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true
  });

export default sayhello;