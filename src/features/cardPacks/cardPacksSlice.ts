import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootStateType, AppDispatchType } from '../../app/store'
import {
  cardPacksApi,
  CardPackType,
  GetCardPacksResponseType,
  CardPackQueryParamsType,
  UpdateCardPackPayloadType,
  CreateCardPackPayloadType,
} from './cardPacksApi'
import { AxiosError, AxiosResponse } from 'axios'
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
  debugger
  try {
    dispatch(setStatus({ status: 'loading' }))
    const queryParamsValues = getState().cardPacks.queryParamsValues
    const res: AxiosResponse<GetCardPacksResponseType> = await cardPacksApi.getCardPacks(
      queryParamsValues
    )
    return res.data
  } catch (error: any) {
    handleNetworkError(error, dispatch)
    return rejectWithValue(error)
  } finally {
    dispatch(setStatus({ status: 'idle' }))
  }
})

export const createCardPack = createAsyncThunk<void, CreateCardPackPayloadType>(
  'cardPacks/createCardPack',
  async (payload, { dispatch }) => {
    try {
      dispatch(setStatus({ status: 'loading' }))
      const res = await cardPacksApi.createCardPack(payload).then(() => {
        dispatch(getCardPacks)
      })
    } catch (error: any) {
      handleNetworkError(error, dispatch)
    } finally {
      dispatch(setStatus({ status: 'idle' }))
    }
  }
)

export const updateCardPack = createAsyncThunk<void, UpdateCardPackPayloadType>(
  'cardPacks/updateCardPack',
  async (payload, { dispatch }) => {
    try {
      dispatch(setStatus({ status: 'loading' }))
      const res = await cardPacksApi.updateCardPack(payload)
      await dispatch(getCardPacks)
    } catch (error: any) {
      handleNetworkError(error, dispatch)
    } finally {
      dispatch(setStatus({ status: 'idle' }))
    }
  }
)

export const deleteCardPack = createAsyncThunk<void, string>(
  'cardPacks/deleteCardPack',
  async (id, { dispatch }) => {
    try {
      dispatch(setStatus({ status: 'loading' }))
      const res = await cardPacksApi.deletePack(id)
      dispatch(getCardPacks)
    } catch (error: any) {
      handleNetworkError(error, dispatch)
    } finally {
      dispatch(setStatus({ status: 'idle' }))
    }
  }
)

export const { changeQueryParamsValues } = cardPacksSlice.actions
export const cardPacksReducer = cardPacksSlice.reducer

// export const getCardPacksThunk =
// //   (userId?: string, page?: number): AppDispatchType =>
// //   (dispatch) => {
// //     dispatch(setStatus({ status: 'loading' }))
// //     cardPacksApi
// //       .getCardPacks(userId, page)
// //       .then((res: AxiosResponse) => {
// //         dispatch(setCardPacksList(res.data))
// //       })
// //       .catch((error) => {
// //         handleNetworkError(error, dispatch)
// //       })
// //       .finally(() => {
// //         dispatch(setStatus({ status: 'idle' }))
// //       })
// //   }

// export const updataCardPack =
//   (payload: UpdateCardsPackPayloadType): AppDispatchType =>
//   (dispatch, getState) => {
//     dispatch(setStatus({ status: 'loading' }))
//     cardPacksApi
//       .updateCardPack(payload)
//       .then(() => {
//         if (getState().cardPacks.privateMode) {
//           dispatch(getCardPacksThunk(getState().app.userData._id))
//         } else {
//           dispatch(getCardPacksThunk())
//         }
//       })
//       .catch((error) => {
//         handleNetworkError(error, dispatch)
//       })
//       .finally(() => {
//         dispatch(setStatus({ status: 'idle' }))
//       })
//   }
//
// export const createCardPack =
//   (payload: CreateCardsPackPayloadType): AppDispatchType =>
//   (dispatch, getState) => {
//     dispatch(setStatus({ status: 'loading' }))
//     cardPacksApi
//       .createCardPack(payload)
//       .then((res) => {
//         debugger
//         if (getState().cardPacks.privateMode) {
//           dispatch(getCardPacksThunk(getState().app.userData._id))
//         } else {
//           dispatch(getCardPacksThunk())
//         }
//       })
//       .catch((error) => {
//         handleNetworkError(error, dispatch)
//       })
//       .finally(() => {
//         dispatch(setStatus({ status: 'idle' }))
//       })
//   }
// export const deleteCardPack =
//   (_id: string): AppDispatchType =>
//   (dispatch, getState) => {
//     dispatch(setStatus({ status: 'loading' }))
//     cardPacksApi
//       .deletePack(_id)
//       .then(() => {
//         if (getState().cardPacks.privateMode) {
//           dispatch(getCardPacksThunk(getState().app.userData._id))
//         } else {
//           dispatch(getCardPacksThunk())
//         }
//       })
//       .catch((error: Error | AxiosError) => {
//         handleNetworkError(error, dispatch)
//       })
//       .finally(() => {
//         dispatch(setStatus({ status: 'idle' }))
//       })
//   }
