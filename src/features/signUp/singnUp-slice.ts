import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { handleNetworkError } from '../../common/utils/errorUtil'
import { RegisterParamsType, signUpApi } from './signUp-api'
import { setStatus } from '../../app/appSlice'

const initialState = {
  isSignedUp: false,
}

export const registerTC = createAsyncThunk(
  'signUp/register',
  async (data: RegisterParamsType, { dispatch }) => {
    dispatch(setStatus({ status: 'loading' }))
    try {
      const res = await signUpApi.register(data)
      dispatch(setStatus({ status: 'idle' }))
      return { isSignedUp: true }
    } catch (err: any) {
      handleNetworkError(err, dispatch)
    }
  }
)

const slice = createSlice({
  name: 'signUp',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.isSignedUp = action.payload.isSignedUp
      }
    })
  },
})

export const registrationReducer = slice.reducer
