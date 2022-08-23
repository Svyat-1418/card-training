import axios from 'axios'

export const instance = axios.create({
  // baseURL: 'http://localhost:7542/2.0/',
  baseURL: 'https://neko-back.herokuapp.com/2.0',
  withCredentials: true,
})

export const forgotPasswordApi = {
  sendEmail(email: string) {
    return instance.post('auth/forgot', {
      email: email,
      from: 'test-front-admin <ai73a@yandex.by>',
      message: `<div>password recovery link: <a href='http:/localhost:3000/#/create-new-password/$token$'>link</alink</a></div>`,
    })
  },
}
