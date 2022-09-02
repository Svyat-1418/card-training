import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import { CardsTable } from './Cards-table'
import { useEffect } from 'react'
import { useAppDispatch } from '../../common/hooks'
import { addCardThunk, getCardsThunk } from './cards-slice'
import { useSelector } from 'react-redux'
import { RootStateType } from '../../app/store'
import { Button } from '@mui/material'

export const CardsPage = () => {
  const dispatch = useAppDispatch()
  const queryParams = useSelector<RootStateType, any>((state) => state.cards.queryParams)
  const packId = useSelector<RootStateType, string | undefined>(
    (state) => state.cards.queryParams.cardsPack_id
  )

  const onAddCardHandler = () => {
    dispatch(
      addCardThunk({
        card: { cardsPack_id: packId, question: 'Some question', answer: 'answer text' },
      })
    )
  }

  useEffect(() => {
    dispatch(getCardsThunk({ ...queryParams }))
  }, [packId])
  return (
    <div>
      <div>
        <span>
          <KeyboardBackspaceIcon style={{ paddingTop: '5px' }} /> Back to Pack List
        </span>
        <Button onClick={onAddCardHandler}>add new card</Button>
      </div>
      <CardsTable />
    </div>
  )
}
