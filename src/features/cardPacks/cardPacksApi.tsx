import axios from 'axios'
import { instance } from '../../common/config/apiConfig'

// export const instance = axios.create({
//   baseURL: 'http://localhost:7542/2.0/',
//   // baseURL: 'https://neko-back.herokuapp.com/2.0',
//   withCredentials: true,
// })

export const cardPacksApi = {
  getPackList() {
    let pageCount = 5
    return instance.get(`cards/pack?pageCount=${pageCount}`)
  },
  createPack(name: string) {
    return instance.post(`cards/pack`, { name })
  },
  editPack(_id: string, name: string) {
    return instance.put(`cards/pack`, { cardsPack: { _id, name } })
  },
}
