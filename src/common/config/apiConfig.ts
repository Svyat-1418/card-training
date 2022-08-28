import axios from 'axios'

export const instance = axios.create({
  baseURL: process.env.REACT_APP_LOCAL_BACK_URL || process.env.REACT_APP_HEROKU_BACK_URL,
  withCredentials: true,
})