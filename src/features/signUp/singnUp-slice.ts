import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Dispatch } from 'redux'
import { handleNetworkError } from '../../common/utils/errorUtil'
import { RegisterParamsType, signUpApi } from './signUp-api'

const initialState = {
  isSignedUp: false,
}

const slice = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {
    setIsSignedUpAC(state, action: PayloadAction<{ value: boolean }>) {
      state.isSignedUp = action.payload.value
    },
  },
})

export const registrationReducer = slice.reducer

export const { setIsSignedUpAC } = slice.actions

export const registerTC = (data: RegisterParamsType) => (dispatch: Dispatch) => {
  signUpApi
    .register(data)
    .then((res) => {
      debugger
      if (res.status === 200) {
        dispatch(setIsSignedUpAC({ value: true }))
      }
    })
    .catch((error) => {
      handleNetworkError(error, dispatch)
    })
}
