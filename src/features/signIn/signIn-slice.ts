import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { loginAPI, LoginParamsType } from './signIn-api'
import { handleNetworkError } from '../../common/utils/errorUtil'
import { authAPI } from '../auth/authApi'
import { initializeApp, setStatus } from '../../app/appSlice'

const initialState = {
  isLoggedIn: false,
}

export const loginTC = createAsyncThunk(
  'login/loginUser',
  async (data: LoginParamsType, { dispatch }) => {
    dispatch(setStatus({ status: 'loading' }))
    try {
      const res = await loginAPI.login(data)
      dispatch(setStatus({ status: 'idle' }))
      dispatch(initializeApp())
      return { isLoggedIn: true }
    } catch (err: any) {
      handleNetworkError(err, dispatch)
    }
  }
)

export const logoutTC = createAsyncThunk('login/logoutUser', async (_, { dispatch }) => {
  dispatch(setStatus({ status: 'loading' }))
  try {
    const res = await authAPI.logout()
    dispatch(setStatus({ status: 'idle' }))
    return { isLoggedIn: false }
  } catch (err: any) {
    handleNetworkError(err, dispatch)
  }
})

const slice = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {
    setIsLoggedInAC(state, action: PayloadAction<{ value: boolean }>) {
      state.isLoggedIn = action.payload.value
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.isLoggedIn = action.payload.isLoggedIn
      }
    })
    builder.addCase(logoutTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.isLoggedIn = action.payload.isLoggedIn
      }
    })
  },
})

export const loginReducer = slice.reducer

export const { setIsLoggedInAC } = slice.actions
