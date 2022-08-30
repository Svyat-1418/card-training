import { createSlice } from '@reduxjs/toolkit'
import { ThunkType } from '../../app/store'
import { packListApi } from './packListApi'

export type PackListStateTypes = {}
const initialState: PackListStateTypes = {}

export const packListSlice = createSlice({
  name: 'packList',
  initialState,
  reducers: {
    // setRecoveryEmail(state: ForgotPasswordPageStateTypes, action: PayloadAction<string>) {
    //     state.recoveryEmail = action.payload
    // },
  },
})

export const {} = packListSlice.actions

export const getPackListThunk = (): ThunkType => (dispatch) => {
  packListApi
    .getPackList()
    .then((res) => console.log(res))
    .catch((error) => console.log(error))
}
// export const setNewPasswordThunk =
//     (newPassword: string, token: string | undefined): ThunkType =>
//         (dispatch) => {
//             forgotPasswordApi
//                 .setNewPassword(newPassword, token)
//                 .then((res: AxiosResponse<resetPasswordResponse>) =>
//                     dispatch(createNewPasswordStatusChange(true))
//                 )
//                 .catch((error) => {
//                     dispatch(createNewPasswordStatusChange(false))
//                 })
//         }
