import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { authAPI, MeResponseType } from '../features/auth/authApi'
import { handleNetworkError } from '../common/utils/errorUtil'

export const initializeApp = createAsyncThunk(
  'app/initializeApp',
  async (payload, { fulfillWithValue, dispatch }) => {
    try {
      const res = await authAPI.me()
      return fulfillWithValue<MeResponseType>(res.data)
    } catch (err: any) {
      handleNetworkError(err, dispatch)
    }
  }
)

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
    setAppStatus: (state, action: PayloadAction<{ status: RequestStatusType }>) => {
      state.status = action.payload.status
    },
    setAppError: (state, action: PayloadAction<{ error: string | null }>) => {
      state.error = action.payload.error
    },
  },
  extraReducers: (builder) => {
    builder.addCase(initializeApp.fulfilled, (state, action) => {
      if (action.payload) state.userData = action.payload.payload
      state.isInitialized = true
    })
  },
})

export const { setAppStatus, setAppError } = appSlice.actions
export const appReducer = appSlice.reducer

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
