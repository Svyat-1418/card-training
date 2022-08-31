import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { authAPI, MeResponseType } from '../features/auth/authApi'
import { handleNetworkError } from '../common/utils/errorUtil'
import { setIsLoggedInAC } from '../features/signIn/signIn-slice'

const initialState = {
  status: 'idle' as RequestStatusType,
  error: null as string | null,
  isInitialized: false,
  userData: {} as MeResponseType,
}
const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setStatus: (state, action: PayloadAction<{ status: RequestStatusType }>) => {
      state.status = action.payload.status
    },
    setError: (state, action: PayloadAction<{ error: string | null }>) => {
      state.error = action.payload.error
    },
    setIsInitialized: (state, action: PayloadAction<{ isInitialized: boolean }>) => {
      state.isInitialized = action.payload.isInitialized
    },
  },
  extraReducers: (builder) => {
    builder.addCase(initializeApp.fulfilled, (state, action) => {
      if (action.payload) {
        state.userData = action.payload.userData
        state.isInitialized = true
      }
      state.isInitialized = true
    })
  },
})

export const initializeApp = createAsyncThunk('app/initializeApp', async (_, { dispatch }) => {
  try {
    const res = await authAPI.me()
    dispatch(setIsLoggedInAC({ value: true }))
    return { userData: res.data }
  } catch (err: any) {
    handleNetworkError(err, dispatch)
  } finally {
    dispatch(setIsInitialized)
  }
})

export const { setStatus, setError, setIsInitialized } = appSlice.actions
export const appReducer = appSlice.reducer

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
