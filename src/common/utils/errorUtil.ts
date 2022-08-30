import axios, { AxiosError } from 'axios'
import { Dispatch } from 'redux'
import { setError } from '../../app/appSlice'

export const handleNetworkError = (error: Error | AxiosError, dispatch: Dispatch) => {
  const err = error as Error | AxiosError<{ error: string }>
  if (axios.isAxiosError(err)) {
    const errorMessage = err.response?.data ? err.response.data.error : err.message
    dispatch(setError({ error: errorMessage }))
  } else {
    dispatch(setError({ error: `Native error ${err.message}` }))
  }

  // const errorMessage = axios.isAxiosError(error)
  //     ? (error.response?.data as { error: string }).error
  //     : error.message + ', more details in the console'
  //
  //
  // dispatch(setAppErrorAC(errorMessage))
}
