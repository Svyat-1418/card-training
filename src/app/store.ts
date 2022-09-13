import {
  AnyAction,
  combineReducers,
  configureStore,
  ThunkAction,
  ThunkDispatch,
} from '@reduxjs/toolkit'
import { loginReducer } from '../features/signIn/signIn-slice'
import { registrationReducer } from '../features/signUp/singnUp-slice'
import { recoveryPasswordSlice } from '../features/recoveryPassword/recoveryPasswordSlice'
import thunk from 'redux-thunk'
import { appReducer } from './appSlice'
import { cardPacksReducer } from '../features/cardPacks/cardPacksSlice'
import { cardsReducer } from '../features/cards/cardsSlice'

const RootReducer = combineReducers({
  login: loginReducer,
  registration: registrationReducer,
  forgotPassword: recoveryPasswordSlice.reducer,
  app: appReducer,
  cardPacks: cardPacksReducer,
  cards: cardsReducer,
})

export const store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk),
})

export type RootStateType = ReturnType<typeof store.getState>
export type DispatchType = ThunkDispatch<RootStateType, unknown, AnyAction>
export type AppDispatchType<ReturnType = void> = ThunkAction<
  ReturnType,
  RootStateType,
  unknown,
  AnyAction
>
