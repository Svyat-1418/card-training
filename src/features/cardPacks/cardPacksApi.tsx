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
  createCardPack(payload: CreateCardsPackPayloadType) {
    return instance.post<CreateCardPackResponseType>(`cards/pack`, payload)
  },
  updateCardtPack(payload: UpdateCardsPackPayloadType) {
    return instance.put<UpdateCardPackResponseType>(`cards/pack`, payload)
  },
  deletePack(id: string) {
    return instance.delete(`cards/pack`, {
      params: {
        id,
      },
    })
  },
}

export type CardPackType = {
  _id: string
  user_id: string
  user_name: string
  private?: boolean
  name: string
  path: string
  grade: number
  shots: number
  deckCover: string
  cardsCount: number
  type?: string
  rating: number
  created: string
  updated: string
  more_id: string
  __v: number
}

export type CreateCardPackResponseType = {
  newCardsPack: CardPackType
  token: string
  tokenDeathTime: string
}

export type CreateCardsPackPayloadType = {
  cardsPack: {
    name: string // "no Name" - если не отправить name будет таким
    deckCover?: string
    private?: boolean
  }
}

export type UpdateCardPackResponseType = {
  updatedCardsPack: CardPackType
  token: string
  tokenDeathTime: string
}
export type UpdateCardsPackPayloadType = {
  cardsPack: {
    _id: string
    name: string
    private?: boolean
  }
}
