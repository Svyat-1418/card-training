import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import { CardsTable } from './table/CardsTable'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../common/hooks'
import { clearCardsListAC, getCardsThunk } from './cardsSlice'
import { NavLink, useParams } from 'react-router-dom'
import style from './cards.module.css'
import { CardsQuestionSearch } from './CardsSearchComponent/CardsQuestionSearch'
import { AddCardModal } from './modals/addCardModal'

export const CardsPage = () => {
  const dispatch = useAppDispatch()
  const params = useParams()
  const packId = params.id
  const userId = params.userId

  const queryParams = useAppSelector((state) => state.cards.queryParams)
  let currentUserId = useAppSelector((state) => state.app.userData._id)
  const isUserCard = currentUserId === userId

  useEffect(() => {
    dispatch(getCardsThunk({ ...queryParams, cardsPack_id: packId }))
    dispatch(clearCardsListAC())
  }, [queryParams])
  return (
    <div>
      <div className={style.header}>
        <div className={style.backContainer}>
          <NavLink to={'/card-packs'}>
            <h2>
              <KeyboardBackspaceIcon style={{ paddingTop: '5px' }} /> Back to Pack List
            </h2>
          </NavLink>
        </div>
        <div className={style.addCardContainer}>
          {isUserCard ? <h1>My pack</h1> : <h1>Friends pack</h1>}
          {isUserCard && <AddCardModal packId={packId} />}
        </div>
        <CardsQuestionSearch />
      </div>
      <div className={style.tableContainer}>
        <CardsTable packId={packId} isUserCard={isUserCard} />
      </div>
    </div>
  )
}
