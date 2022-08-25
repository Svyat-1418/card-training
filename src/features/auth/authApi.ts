import { instance } from '../../common/config/apiConfig'

export const authAPI = {
  me() {
    return instance.post('auth/me')
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
