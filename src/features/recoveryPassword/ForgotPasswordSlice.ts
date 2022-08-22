import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { forgotPasswordApi } from '../../common/config/apiConfig'

const initialState = {
  email: '',
  isSentSuccess: false,
}

export const forgotPasswordSlice = createSlice({
  name: 'resetPassword',
  initialState,
  reducers: {
    sendEmail(state, action) {
      state.email = action.payload
    },
  },
  // extraReducers: (builder) => {
  //     builder.addCase(SendEmailThunk.fulfilled, (state, action) => {
  //         state.email = action.payload
  //     })
  // }
})

export const { sendEmail } = forgotPasswordSlice.actions

export const SendEmailThunk = createAsyncThunk('resetPassword/sendEmail', async (email: string) => {
  const response = await forgotPasswordApi.sendEmail(email)
  return response
})
