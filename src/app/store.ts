import {AnyAction, configureStore, ThunkDispatch} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {}
})


export type RootStateType = ReturnType<typeof store.getState>

// в react 18 используем useAppDispatch вместо useDispatch
export type DispatchType  = ThunkDispatch<RootStateType, unknown, AnyAction>
