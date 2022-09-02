import { instance } from '../../common/config/apiConfig'

export const cardPacksApi = {
  getPackList(user_id?: string, page?: number) {
    let pageCount = 5
    return instance.get(`cards/pack`, {
      params: {
        pageCount,
        user_id,
        page,
      },
    })
  },
  createPack(name: string) {
    return instance.post(`cards/pack`, { cardsPack: { name } })
  },
  editPack(packId: string, name: string) {
    return instance.put(`cards/pack`, { cardsPack: { _id: packId, name } })
  },
  deletePack(id: string) {
    return instance.delete(`cards/pack`, {
      params: {
        id,
      },
    })
  },
}
