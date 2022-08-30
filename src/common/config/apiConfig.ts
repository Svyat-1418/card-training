import axios from 'axios'

export const instance = axios.create({
  baseURL: process.env.REACT_APP_LOCAL_BACK_URL || process.env.REACT_APP_HEROKU_BACK_URL,
  // baseURL: 'http://localhost:7542/2.0/' || 'https://neko-back.herokuapp.com/2.0',
  withCredentials: true,
})
