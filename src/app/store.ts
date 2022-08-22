import { AnyAction, configureStore, ThunkDispatch } from '@reduxjs/toolkit'
import { forgotPasswordSlice } from '../features/recoveryPassword/ForgotPasswordSlice'

export const store = configureStore({
  reducer: {
    forgotPassword: forgotPasswordSlice.reducer,
  },
})

export type RootStateType = ReturnType<typeof store.getState>

// в react 18 используем useAppDispatch вместо useDispatch
export type DispatchType = ThunkDispatch<RootStateType, unknown, AnyAction>
