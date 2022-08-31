import { createSlice } from '@reduxjs/toolkit'
import { cardsAPI, CardType } from './cards-api'
import { ThunkType } from '../../app/store'
import { Dispatch } from 'redux'
import { AxiosError } from 'axios'

const initialState = {
  cards: [] as CardType[],
  packUserId: '',
  page: 0,
  pageCount: 0,
  cardsTotalCount: -1,
  minGrade: 0,
  maxGrade: 0,
  token: '',
  tokenDeathTime: 0,
  queryParams: {
    pageCount: 5,
    page: 1,
  },
  sortParams: {},
}

export const packListSlice = createSlice({
  name: 'packList',
  initialState,
  reducers: {},
})

export const cardsReducer = packListSlice.reducer

export const {} = packListSlice.actions

export const getCardsThunk =
  (params: any): ThunkType =>
  (dispatch: Dispatch) => {
    cardsAPI
      .getCards(params)
      .then((res) => {})
      .catch((err: AxiosError<{ error: string }>) => {})
  }
