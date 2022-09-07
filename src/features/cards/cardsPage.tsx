import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import { CardsTable } from './table/CardsTable'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../common/hooks'
import { addCardThunk, clearCardsListAC, getCardsThunk } from './cardsSlice'
import { Button } from '@mui/material'
import { NavLink, useParams } from 'react-router-dom'
import style from './cards.module.css'

export const CardsPage = () => {
  const dispatch = useAppDispatch()
  const params = useParams()
  const packId = params.id

  const queryParams = useAppSelector((state) => state.cards.queryParams)

  const onAddCardHandler = () => {
    dispatch(
      addCardThunk({
        card: { cardsPack_id: packId, question: 'Some question', answer: 'answer text' },
      })
    )
  }

  useEffect(() => {
    dispatch(getCardsThunk({ ...queryParams, cardsPack_id: packId }))
    dispatch(clearCardsListAC())
  }, [queryParams])
  return (
    <div>
      <div className={style.header}>
        <NavLink to={'/card-packs'}>
          <span>
            <KeyboardBackspaceIcon style={{ paddingTop: '5px' }} /> Back to Pack List
          </span>
        </NavLink>

        <Button onClick={onAddCardHandler}>add new card</Button>
      </div>
      <div className={style.tableContainer}>
        <CardsTable packId={packId} />
      </div>
    </div>
  )
}
