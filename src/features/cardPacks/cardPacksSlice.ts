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
}
const initialState: CardPacksStateTypes = {
  cardPacks: [],
}

export const cardPacksSlice = createSlice({
  name: 'packList',
  initialState,
  reducers: {
    setCardPacksList(state: CardPacksStateTypes, action: PayloadAction<CardPacksType[]>) {
      state.cardPacks = action.payload
    },
    // setRecoveryEmail(state: ForgotPasswordPageStateTypes, action: PayloadAction<string>) {
    //     state.recoveryEmail = action.payload
    // },
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

//  export const setNewPasswordThunk =
//     (newPassword: string, token: string | undefined): ThunkType =>
//         (dispatch) => {
//             forgotPasswordApi
//                 .setNewPassword(newPassword, token)
//                 .then((res: AxiosResponse<resetPasswordResponse>) =>
//                     dispatch(createNewPasswordStatusChange(true))
//                 )
//                 .catch((error) => {
//                     dispatch(createNewPasswordStatusChange(false))
//                 })
//         }
