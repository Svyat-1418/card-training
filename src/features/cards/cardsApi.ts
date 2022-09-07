import { instance } from '../../common/config/apiConfig'

export const cardsApi = {
  getCards(params: CardQueryParams) {
    return instance.get<ResponseGetCardType>('/cards/card', { params: params })
  },
  deleteCard(id: string) {
    return instance.delete('/cards/card', {
      params: {
        id,
      },
    })
  },
  updateCard(data: UpdateCardType) {
    return instance.put('/cards/card', data)
  },
  createCard(data: CreateCardType) {
    return instance.post('/cards/card', data)
  },
}

export type CardType = {
  _id: string
  cardsPack_id: string
  user_id: string
  answer: string
  question: string
  grade: number
  shots: number
  comments: string
  type: string
  rating: number
  more_id: string
  created: string
  updated: string
  __v: number
}
export type ResponseGetCardType = {
  cards: CardType[]
  packUserId: string
  page: number
  pageCount: number
  cardsTotalCount: number
  minGrade: number
  maxGrade: number
  token: string
  tokenDeathTime: number
}
export type CardQueryParams = {
  cardAnswer?: string
  cardQuestion?: string
  cardsPack_id?: string | undefined
  min?: string
  max?: string
  sortCards?: string
  page?: number
  pageCount?: number
}
export type CreateCardType = {
  card: {
    cardsPack_id: string | undefined
    question?: string
    answer?: string
    grade?: number
    shots?: number
    answerImg?: string
    questionImg?: string
    questionVideo?: string
    answerVideo?: string
  }
}

export type UpdateCardType = {
  card: {
    _id: string
    question?: string
    answer?: string
  }
}
