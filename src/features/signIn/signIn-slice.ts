import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Dispatch } from 'redux'
import { loginAPI, LoginParamsType } from './signIn-api'
import { handleNetworkError } from '../../common/utils/errorUtil'

const initialState = {
  isLoggedIn: false,
}

const slice = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {
    setIsLoggedInAC(state, action: PayloadAction<{ value: boolean }>) {
      state.isLoggedIn = action.payload.value
    },
  },
})

export const loginReducer = slice.reducer

export const { setIsLoggedInAC } = slice.actions

export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch) => {
  loginAPI
    .login(data)
    .then((res) => {
      if (res.status === 200) {
        dispatch(setIsLoggedInAC({ value: true }))
      }
    })
    .catch((error) => {
      handleNetworkError(error, dispatch)
    })
}
