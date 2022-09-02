import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  CardQueryParams,
  cardsAPI,
  CardType,
  CreateCardType,
  ResponseGetCardType,
  UpdateCardType,
} from './cards-api'
import { ThunkType } from '../../app/store'
import { AxiosError } from 'axios'
import { handleNetworkError } from '../../common/utils/errorUtil'

const initialState = {
  cardsData: {
    cards: [] as CardType[],
    packUserId: '',
    page: 0,
    pageCount: 0,
    cardsTotalCount: -1,
    minGrade: 0,
    maxGrade: 0,
    token: '',
    tokenDeathTime: 0,
  } as ResponseGetCardType,
  queryParams: {} as CardQueryParams,
  sortParams: {},
}
console.log(initialState)

export const packListSlice = createSlice({
  name: 'packList',
  initialState,
  reducers: {
    setCardsAC(state, action: PayloadAction<{ cardsData: ResponseGetCardType }>) {
      state.cardsData = action.payload.cardsData
    },
    clearCardsListAC(state) {
      state.cardsData.cards = []
    },
  },
})

export const cardsReducer = packListSlice.reducer

export const { setCardsAC, clearCardsListAC } = packListSlice.actions

export const getCardsThunk =
  (params: CardQueryParams): ThunkType =>
  (dispatch) => {
    cardsAPI
      .getCards(params)
      .then((res) => {
        dispatch(setCardsAC({ cardsData: res.data }))
      })
      .catch((err: AxiosError<{ error: string }>) => {})
  }
export const deleteCardThunk =
  (id: string, packId: string): ThunkType =>
  (dispatch, getState) => {
    cardsAPI
      .deleteCard(id)
      .then((res) => {
        dispatch(getCardsThunk({ cardsPack_id: packId, ...getState().cards.queryParams }))
      })
      .catch((err: AxiosError<{ error: string }>) => handleNetworkError(err, dispatch))
  }
export const updateCardThunk =
  (data: UpdateCardType, packId: string): ThunkType =>
  (dispatch, getState) => {
    cardsAPI
      .updateCard(data)
      .then((res) => {
        dispatch(getCardsThunk({ cardsPack_id: packId, ...getState().cards.queryParams }))
      })
      .catch((err: AxiosError<{ error: string }>) => handleNetworkError(err, dispatch))
  }
export const addCardThunk =
  (data: CreateCardType): ThunkType =>
  (dispatch, getState) => {
    cardsAPI
      .createCard(data)
      .then((res) => {
        dispatch(
          getCardsThunk({ cardsPack_id: data.card.cardsPack_id, ...getState().cards.queryParams })
        )
      })
      .catch((err: AxiosError<{ error: string }>) => handleNetworkError(err, dispatch))
  }
