import axios from "axios";

export const api = axios.create({
  headers: {
    'Content-type': 'application/json'
  },
  baseURL: 'http://parcer-back/',
  responseType: 'json'
})