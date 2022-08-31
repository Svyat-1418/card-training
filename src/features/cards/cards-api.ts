import { instance } from '../../common/config/apiConfig'

export const cardsAPI = {
  getCards(params: any) {
    return instance.get<ResponseGetCardType>('/cards/card', { params: params })
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
