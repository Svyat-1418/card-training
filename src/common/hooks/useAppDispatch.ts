import { useDispatch } from 'react-redux'
import { DispatchType } from '../../app/store'

export const useAppDispatch = () => useDispatch<DispatchType>()
