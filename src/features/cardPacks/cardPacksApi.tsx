import { instance } from '../../common/config/apiConfig'

export const cardPacksApi = {
  getPackList() {
    let pageCount = 5
    let user_id = '6300e53693f58a3f1e8d9500'
    return instance.get(`cards/pack`, {
      params: {
        pageCount,
        user_id,
      },
    })
  },
  createPack(name: string) {
    return instance.post(`cards/pack`, { name })
  },
  editPack(_id: string, name: string) {
    return instance.put(`cards/pack`, { cardsPack: { _id, name } })
  },
}
