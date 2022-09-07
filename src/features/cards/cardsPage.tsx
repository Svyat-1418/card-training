import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import { CardsTable } from './table/CardsTable'
import { useEffect } from 'react'
import { useAppDispatch } from '../../common/hooks'
import { addCardThunk, clearCardsListAC, getCardsThunk } from './cardsSlice'
import { useSelector } from 'react-redux'
import { RootStateType } from '../../app/store'
import { Button } from '@mui/material'
import { NavLink, useParams } from 'react-router-dom'
import { CardQueryParams } from './cardsApi'
import s from './cards.module.css'

export const CardsPage = () => {
  const dispatch = useAppDispatch()
  const params = useParams()
  const packId = params.id

  const queryParams = useSelector<RootStateType, CardQueryParams>(
    (state) => state.cards.queryParams
  )

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
      <div className={s.header}>
        <NavLink to={'/card-packs'}>
          <span>
            <KeyboardBackspaceIcon style={{ paddingTop: '5px' }} /> Back to Pack List
          </span>
        </NavLink>

        <Button onClick={onAddCardHandler}>add new card</Button>
      </div>
      <CardsTable packId={packId} />
    </div>
  )
}
