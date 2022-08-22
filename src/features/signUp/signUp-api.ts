import { instance } from '../../common/config/apiConfig'

export const signUpApi = {
  register(data: RegisterParamsType) {
    return instance.post('auth/register', data)
  },
}

//types
export type RegisterParamsType = {
  email: string
  password: string
}
