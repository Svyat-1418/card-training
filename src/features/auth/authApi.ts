import { instance } from '../../common/config/apiConfig'

export const authAPI = {
  me() {
    return instance.post('auth/me')
  },
}