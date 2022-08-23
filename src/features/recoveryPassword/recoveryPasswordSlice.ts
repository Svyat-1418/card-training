import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { forgotPasswordApi } from '../../common/config/apiConfig'
import { ThunkType } from '../../app/store'
import { AxiosResponse } from 'axios'
import { RecoveryStatus } from '../../common/enums/PasswordRecoveryStatuses'

export type sendEmailResponseType = {
  success: boolean
}
export type resetPasswordResponse = {
  info: string
}
export type ForgotPasswordPageStateTypes = {
  email: string
  isEmailSendSuccess: boolean
  createNewPasswordStatus: number
}
const initialState: ForgotPasswordPageStateTypes = {
  email: '',
  isEmailSendSuccess: false,
  createNewPasswordStatus: RecoveryStatus.Failed,
}

export const recoveryPasswordSlice = createSlice({
  name: 'resetPassword',
  initialState,
  reducers: {
    sendEmail(state: ForgotPasswordPageStateTypes, action: PayloadAction<string>) {
      state.email = action.payload
    },
    sendEmailStatusChange(state: ForgotPasswordPageStateTypes, action: PayloadAction<boolean>) {
      state.isEmailSendSuccess = action.payload
    },
    createNewPasswordStatusChange(
      state: ForgotPasswordPageStateTypes,
      action: PayloadAction<number>
    ) {
      state.createNewPasswordStatus = action.payload
    },
  },
})

export const { sendEmail, sendEmailStatusChange, createNewPasswordStatusChange } =
  recoveryPasswordSlice.actions

export const SendEmailThunk =
  (email: string): ThunkType =>
  (dispatch) => {
    forgotPasswordApi
      .sendEmail(email)
      .then((res: AxiosResponse<sendEmailResponseType>) => {
        dispatch(sendEmailStatusChange(res.data.success))
      })
      .catch((error) => console.log(error))
  }

export const setNewPasswordThunk =
  (newPassword: string, token: string | undefined): ThunkType =>
  (dispatch) => {
    forgotPasswordApi
      .setNewPassword(newPassword, token)
      .then((res: AxiosResponse<resetPasswordResponse>) =>
        dispatch(createNewPasswordStatusChange(RecoveryStatus.Success))
      )
      .catch((error) => dispatch(createNewPasswordStatusChange(RecoveryStatus.Failed)))
  }
