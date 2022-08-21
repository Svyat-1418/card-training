import axios, {AxiosError} from "axios";
import {Dispatch} from "redux";
// @ts-ignore
import {setAppErrorAC, SetAppErrorActionType} from "../store/reducers/app-reducer";

export const handleNetworkError = (error: Error | AxiosError, dispatch: Dispatch<ErrorActionType>) => {
    const err = error as Error | AxiosError<{ error: string }>
    if (axios.isAxiosError(err)) {
        const errorMessage = err.response?.data ? err.response.data.error : err.message
        dispatch(setAppErrorAC(errorMessage))
    } else {
        dispatch(setAppErrorAC(`Native error ${err.message}`))
    }


    // const errorMessage = axios.isAxiosError(error)
    //     ? (error.response?.data as { error: string }).error
    //     : error.message + ', more details in the console'
    //
    //
    // dispatch(setAppErrorAC(errorMessage))
}

type ErrorActionType = SetAppErrorActionType
