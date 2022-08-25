import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { forgotPasswordApi } from '../../common/config/apiConfig'
import { ThunkType } from '../../app/store'
import { AxiosResponse } from 'axios'

export type sendEmailResponseType = {
  success: boolean
}
export type resetPasswordResponse = {
  info: string
}
export type ForgotPasswordPageStateTypes = {
  recoveryEmail: string
  isEmailSendSuccess: boolean
  isNewPasswordAccepted: boolean
  errorMessage: string
  isFetching: boolean
}
const initialState: ForgotPasswordPageStateTypes = {
  recoveryEmail: '',
  isEmailSendSuccess: false,
  isNewPasswordAccepted: false,
  errorMessage: '',
  isFetching: false,
}

export const recoveryPasswordSlice = createSlice({
  name: 'resetPassword',
  initialState,
  reducers: {
    setRecoveryEmail(state: ForgotPasswordPageStateTypes, action: PayloadAction<string>) {
      state.recoveryEmail = action.payload
    },
    sendEmailStatusChange(state: ForgotPasswordPageStateTypes, action: PayloadAction<boolean>) {
      state.isEmailSendSuccess = action.payload
    },
    createNewPasswordStatusChange(
      state: ForgotPasswordPageStateTypes,
      action: PayloadAction<boolean>
    ) {
      state.isNewPasswordAccepted = action.payload
    },
    setErrorMessage(state: ForgotPasswordPageStateTypes, action: PayloadAction<string>) {
      state.errorMessage = action.payload
    },
    setIsFetching(state: ForgotPasswordPageStateTypes, action: PayloadAction<boolean>) {
      state.isFetching = action.payload
    },
  },
})

export const {
  setRecoveryEmail,
  sendEmailStatusChange,
  createNewPasswordStatusChange,
  setErrorMessage,
  setIsFetching,
} = recoveryPasswordSlice.actions

export const SendEmailThunk =
  (email: string): ThunkType =>
  (dispatch) => {
    dispatch(setRecoveryEmail(email))
    dispatch(setIsFetching(true))
    forgotPasswordApi
      .sendEmail(email)
      .then((res: AxiosResponse<sendEmailResponseType>) => {
        dispatch(sendEmailStatusChange(res.data.success))
        dispatch(setIsFetching(false))
      })
      .catch((error) => {
        dispatch(setErrorMessage(error.response.data.error))
        dispatch(setIsFetching(false))
      })
  }

export const setNewPasswordThunk =
  (newPassword: string, token: string | undefined): ThunkType =>
  (dispatch) => {
    forgotPasswordApi
      .setNewPassword(newPassword, token)
      .then((res: AxiosResponse<resetPasswordResponse>) =>
        dispatch(createNewPasswordStatusChange(true))
      )
      .catch((error) => {
        dispatch(createNewPasswordStatusChange(false))
      })
  }
