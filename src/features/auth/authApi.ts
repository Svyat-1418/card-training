import { instance } from '../../common/config/apiConfig'

export const authAPI = {
  me() {
    return instance.post<MeResponseType>('auth/me')
  },
  logout() {
    return instance.delete('auth/me')
  },
  updateMe(payload: UpdateMePayloadType) {
    return instance.put<UpdateMeResponseType>('auth/me', payload)
  },
}

export type UpdateMePayloadType = {
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
type UpdateMeResponseType = {
  updatedUser: {
    _id: string
    email: string
    rememberMe: boolean
    isAdmin: boolean
    name: string
    verified: boolean
    publicCardPacksCount: number
    created: string
    updated: string
    __v: number
    token: string
    tokenDeathTime: number
    avatar?: string

    error?: string
  }
  token: string
  tokenDeathTime: number
}
