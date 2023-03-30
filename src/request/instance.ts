import axios from 'axios';

const _axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
});

export default _axios;
