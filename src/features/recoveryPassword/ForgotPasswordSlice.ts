import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: '',
  isSentSuccess: false,
}

export const resetPasswordSlice = createSlice({
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

export const { sendEmail } = resetPasswordSlice.actions

export const SendEmailThunk = createAsyncThunk('resetPassword/sendEmail', async (email: string) => {
  const response = await forgotPasswordApi.sendEmail(email)
  return response
})
