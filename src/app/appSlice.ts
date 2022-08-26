import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { MeResponseType } from '../features/auth/authApi'

const initialState = {
  status: 'idle' as RequestStatusType,
  error: null as string | null,
  isInitialized: false,
  userData: {} as MeResponseType,
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
})

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
