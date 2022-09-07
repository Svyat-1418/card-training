import { RootStateType } from './store'
import { RequestStatusType } from './appSlice'

export const selectError = (state: RootStateType): string | null => state.app.error
export const selectStatus = (state: RootStateType): RequestStatusType => state.app.status

export const selectUserName = (state: RootStateType): string => state.app.userData.name
export const selectUserId = (state: RootStateType): string => state.app.userData._id
export const selectUserPublicCardPacksCount = (state: RootStateType): number =>
  state.app.userData.publicCardPacksCount
export const selectUserAvatar = (state: RootStateType): string | undefined =>
  state.app.userData.avatar
