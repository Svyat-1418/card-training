import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import { CardsTable } from './Cads-table'
import { useEffect } from 'react'
import { useAppDispatch } from '../../common/hooks'
import { getCardsThunk } from './cards-slice'

export const CardsPage = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getCardsThunk('заглушка'))
  }, [])
  return (
    <div>
      <div>
        <span>
          <KeyboardBackspaceIcon style={{ paddingTop: '5px' }} /> Back to Pack List
        </span>
      </div>
      <CardsTable />
    </div>
  )
}
