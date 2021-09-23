import axios from "axios";

export const api = axios.create({
  headers: {
    'Content-type': 'application/json',
  },
  baseURL: 'https://cw60005.tmweb.ru/',
  responseType: 'json'
})