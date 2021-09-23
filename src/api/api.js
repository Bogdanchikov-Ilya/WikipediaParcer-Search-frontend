import axios from "axios";

export const api = axios.create({
  headers: {
    'Content-type': 'application/json',
  },
  baseURL: 'http://cw60005.tmweb.ru/',
  responseType: 'json'
})