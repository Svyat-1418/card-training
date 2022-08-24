import axios from 'axios'

export const instance = axios.create({
  baseURL:
    process.env.REACT_APP_LOCAL_BACK_URL ||
    process.env.REACT_APP_HEROKU_BACK_URL ||
    'http://localhost:7542/2.0/',
  withCredentials: true,
})

export const forgotPasswordApi = {
  sendEmail(email: string) {
    instance.post('http://neko-back.herokuapp.com/2.0/auth/forgot', {
      email: email,
      from: 'test-front-admin <ai73a@yandex.by>',
      message: `<div>password recovery link: <a href='http:/localhost:3000/#/set-new-password/$token$'>link</alink</a></div>`,
    })
  },
}
