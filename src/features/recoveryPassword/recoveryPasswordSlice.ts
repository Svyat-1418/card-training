import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { forgotPasswordApi } from '../../common/config/apiConfig'
import { ThunkType } from '../../app/store'
import { AxiosResponse } from 'axios'

export type sendEmailResponseType = {
  success: boolean
}
export type ForgotPasswordPageStateTypes = {
  email: string
  isSendSuccess: boolean
}
const initialState: ForgotPasswordPageStateTypes = {
  email: '',
  isSendSuccess: false,
}

export const recoveryPasswordSlice = createSlice({
  name: 'resetPassword',
  initialState,
  reducers: {
    sendEmail(state: ForgotPasswordPageStateTypes, action: PayloadAction<string>) {
      state.email = action.payload
    },
    sendEmailStatus(state: ForgotPasswordPageStateTypes, action: PayloadAction<boolean>) {
      state.isSendSuccess = action.payload
    },
  },
})

export const { sendEmail, sendEmailStatus } = recoveryPasswordSlice.actions

export const SendEmailThunk =
  (email: string): ThunkType =>
  (dispatch) => {
    forgotPasswordApi
      .sendEmail(email)
      .then((res: AxiosResponse<sendEmailResponseType>) => {
        dispatch(sendEmailStatus(res.data.success))
      })
      .catch((error) => console.log(error))
  }
