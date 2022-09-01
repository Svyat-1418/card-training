import { instance } from '../../common/config/apiConfig'


export const loginAPI = {
  login({ email, password, rememberMe }: LoginParamsType) {
    return instance.post('auth/login', { email, password, rememberMe })
  },
}

//types
export type LoginParamsType = {
  email: string
  password: string
  rememberMe?: boolean
}
