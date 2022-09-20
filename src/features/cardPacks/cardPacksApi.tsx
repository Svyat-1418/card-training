import { instance } from '../../common/config/apiConfig'

export const cardPacksApi = {
  getCardPacks(payload: CardPackQueryParamsType) {
    return instance.get<GetCardPacksResponseType>(`cards/pack`, {
      params: { ...payload },
    })
  },
  createCardPack(payload: CreateCardPackPayloadType) {
    return instance.post<CreateCardPackResponseType>(`cards/pack`, payload)
  },
  updateCardPack(payload: UpdateCardPackPayloadType) {
    return instance.put<UpdateCardPackResponseType>(`cards/pack`, payload)
  },
  deletePack(id: string) {
    return instance.delete(`cards/pack?id=${id}`)
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
export type GetCardPacksResponseType = {
  cardPacks: CardPackType[]

  page: number
  pageCount: number
  cardPacksTotalCount: number
  minCardsCount: number
  maxCardsCount: number
  token: string
  tokenDeathTime: number
}
export type CardPackQueryParamsType = {
  packName?: string
  min?: number
  max?: number
  sortPacks?: string | '1cardsCount'
  user_id?: string | null
  page?: number
  pageCount?: number
}

export type CreateCardPackResponseType = {
  newCardsPack: CardPackType
  token: string
  tokenDeathTime: string
}

export type CreateCardPackPayloadType = {
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
export type UpdateCardPackPayloadType = {
  cardsPack: {
    _id: string
    name: string
    private?: boolean
  }
}
