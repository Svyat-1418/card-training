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
import { Dispatch } from 'redux'
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

export const packListSlice = createSlice({
  name: 'packList',
  initialState,
  reducers: {
    setCardsAC(state, action: PayloadAction<{ cardsData: ResponseGetCardType }>) {
      state.cardsData = action.payload.cardsData
    },
    setPackIdAC(state, action: PayloadAction<{ packId: string }>) {
      state.queryParams.cardsPack_id = action.payload.packId
    },
  },
})

export const cardsReducer = packListSlice.reducer

export const { setCardsAC, setPackIdAC } = packListSlice.actions

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
  (id: string): ThunkType =>
  (dispatch, getState) => {
    cardsAPI
      .deleteCard(id)
      .then((res) => {
        dispatch(getCardsThunk(getState().cards.queryParams))
      })
      .catch((err: AxiosError<{ error: string }>) => handleNetworkError(err, dispatch))
  }
export const updateCardThunk =
  (data: UpdateCardType): ThunkType =>
  (dispatch, getState) => {
    cardsAPI
      .updateCard(data)
      .then((res) => {
        dispatch(getCardsThunk(getState().cards.queryParams))
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
