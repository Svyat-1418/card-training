import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootStateType } from '../../app/store'
import {
  cardPacksApi,
  CardPackType,
  GetCardPacksResponseType,
  CardPackQueryParamsType,
  UpdateCardPackPayloadType,
  CreateCardPackPayloadType,
} from './cardPacksApi'
import { handleNetworkError } from '../../common/utils/errorUtil'
import { setStatus } from '../../app/appSlice'

const initialState = {
  cardPacks: [] as CardPackType[],
  aboutCardPacks: {
    cardPacksTotalCount: 0,
    page: 1,
    pageCount: 4,
    minCardsCount: 0,
    maxCardsCount: 0,
    token: '',
    tokenDeathTime: 0,
  },
  queryParamsValues: {
    packName: '',
    min: 1,
    max: 110,
    sortPacks: '1cardsCount',
    user_id: '',
    page: 1,
    pageCount: 4,
  } as CardPackQueryParamsType,
}

export const cardPacksSlice = createSlice({
  name: 'cardPacks',
  initialState,
  reducers: {
    changeQueryParamsValues: (
      state,
      action: PayloadAction<{ queryParamsValues: CardPackQueryParamsType }>
    ) => {
      state.queryParamsValues = action.payload.queryParamsValues
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCardPacks.fulfilled, (state, action) => {
      state.cardPacks = action.payload.cardPacks

      state.aboutCardPacks.cardPacksTotalCount = action.payload.cardPacksTotalCount
      state.aboutCardPacks.minCardsCount = action.payload.minCardsCount
      state.aboutCardPacks.maxCardsCount = action.payload.maxCardsCount
      state.aboutCardPacks.page = action.payload.page
      state.aboutCardPacks.pageCount = action.payload.pageCount
      state.aboutCardPacks.token = action.payload.token
      state.aboutCardPacks.tokenDeathTime = action.payload.tokenDeathTime
    })
  },
})

export const getCardPacks = createAsyncThunk<
  GetCardPacksResponseType,
  void,
  { state: RootStateType }
>('cardPacks/getCardPacks', async (_, { dispatch, getState, rejectWithValue }) => {
  try {
    dispatch(setStatus({ status: 'loading' }))

    const res = await cardPacksApi.getCardPacks(getState().cardPacks.queryParamsValues)

    return res.data
  } catch (error: any) {
    handleNetworkError(error, dispatch)

    return rejectWithValue(error)
  } finally {
    dispatch(setStatus({ status: 'idle' }))
  }
})

export const createCardPack = createAsyncThunk<
  void,
  CreateCardPackPayloadType,
  { state: RootStateType }
>('cardPacks/createCardPack', async (payload, { dispatch }) => {
  try {
    dispatch(setStatus({ status: 'loading' }))

    await cardPacksApi.createCardPack(payload)

    dispatch(getCardPacks())
  } catch (error: any) {
    handleNetworkError(error, dispatch)
  } finally {
    dispatch(setStatus({ status: 'idle' }))
  }
})

export const updateCardPack = createAsyncThunk<
  void,
  UpdateCardPackPayloadType,
  { state: RootStateType }
>('cardPacks/updateCardPack', async (payload, { dispatch }) => {
  try {
    dispatch(setStatus({ status: 'loading' }))

    await cardPacksApi.updateCardPack(payload)

    dispatch(getCardPacks())
  } catch (error: any) {
    handleNetworkError(error, dispatch)
  } finally {
    dispatch(setStatus({ status: 'idle' }))
  }
})

export const deleteCardPack = createAsyncThunk<void, string, { state: RootStateType }>(
  'cardPacks/deleteCardPack',
  async (id, { dispatch }) => {
    try {
      dispatch(setStatus({ status: 'loading' }))

      await cardPacksApi.deletePack(id)

      dispatch(getCardPacks())
    } catch (error: any) {
      handleNetworkError(error, dispatch)
    } finally {
      dispatch(setStatus({ status: 'idle' }))
    }
  }
)

export const { changeQueryParamsValues } = cardPacksSlice.actions
export const cardPacksReducer = cardPacksSlice.reducer
