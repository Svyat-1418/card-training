import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ThunkType } from '../../app/store'
import { cardPacksApi } from './cardPacksApi'
import { AxiosResponse } from 'axios'

export type CardPacksType = {
  _id: string
  user_id: string
  name: string
  cardsCount: string
  created: string
  updated: string
}
export type CrudActions = {}
export type CardPacksResponseType = {
  cardPacks: CardPacksType[]
  cardPacksTotalCount: number
  // количество колод
  maxCardsCount: number
  minCardsCount: number
  page: number // выбранная страница
  pageCount: number
  // количество элементов на странице
  token: string
  tokenDeathTime: string
}

export type CardPacksStateTypes = {
  cardPacks: CardPacksType[]
  editMode: boolean
}
const initialState: CardPacksStateTypes = {
  cardPacks: [],
  editMode: false,
}

export const cardPacksSlice = createSlice({
  name: 'packList',
  initialState,
  reducers: {
    setCardPacksList(state: CardPacksStateTypes, action: PayloadAction<CardPacksType[]>) {
      state.cardPacks = action.payload
    },
    setEditMode(state: CardPacksStateTypes, action: PayloadAction<boolean>) {
      state.editMode = action.payload
    },
  },
})

export const { setCardPacksList } = cardPacksSlice.actions

export const getCardPacksThunk = (): ThunkType => (dispatch) => {
  cardPacksApi
    .getPackList()
    .then((res: AxiosResponse<CardPacksResponseType>) => {
      dispatch(setCardPacksList(res.data.cardPacks))
      console.log(res.data.cardPacks)
    })
    .catch((error) => console.log(error))
}
export const editCardPackThunk =
  (id: string, name: string): ThunkType =>
  (dispatch) => {
    cardPacksApi
      .editPack(id, name)
      .then((res) => {
        dispatch(getCardPacksThunk())
      })
      .catch((error) => console.log(error))
  }
export const createCardPackThunk =
  (name: string): ThunkType =>
  (dispatch) => {
    cardPacksApi
      .createPack(name)
      .then((res) => {
        console.log(res)
        // dispatch(getCardPacksThunk())
      })
      .catch((error) => console.log(error))
  }
