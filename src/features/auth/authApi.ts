import { instance } from '../../common/config/apiConfig'

export const authAPI = {
  me() {
    return instance.post<MeResponseType>('auth/me')
  },
  logout() {
    return instance.delete('auth/me')
  },
  updateMe(model: UpdateMeModelType) {
    return instance.put('auth/me', model)
  },
}

export type UpdateMeModelType = {
  name?: string
  avatar?: string
}

export type MeResponseType = {
  _id: string
  email: string
  rememberMe: boolean
  isAdmin: boolean
  name: string

  avatar?: string

  verified: boolean
  publicCardPacksCount: number
  created: string
  updated: string
  __v: number
  token: string
  tokenDeathTime: number

  error?: string
}
