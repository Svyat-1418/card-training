import React, { useEffect, useState } from 'react'
import { changeQueryParamsValues, getCardPacks } from './cardPacksSlice'
import { useAppDispatch, useAppSelector } from '../../common/hooks'
import style from './cardPacks.module.css'
import { MyCardsOnlySwitch } from './components/MyCardsOnlySwitch'
import { CardPackTable } from './components/CardPackTable'
import { PacksPagination } from './components/PacksPagination'
import { AddNewCardPackModal } from './modals/addNewCardPackModal/AddNewCardPackModal'
import { Navigate } from 'react-router-dom'
import { Path } from '../../common/enums/Path'
import { CardPackType } from './cardPacksApi'

export const CardPacksPage = () => {
  const dispatch = useAppDispatch()

  const { packName, sortPacks, page, pageCount, min, max, user_id } = useAppSelector(
    (state) => state.cardPacks.queryParamsValues
  )
  const isLoggedIn = useAppSelector((state) => state.login.isLoggedIn)
  const currentUserId = useAppSelector((state) => state.app.userData._id)
  const totalPacks = useAppSelector((state) => state.cardPacks.aboutCardPacks.cardPacksTotalCount)
  const currentPagePacksCount = useAppSelector((state) => state.cardPacks.aboutCardPacks.pageCount)
  const cardPacks: CardPackType[] = useAppSelector((state) => state.cardPacks.cardPacks)

  const [isMyPacks, setIsMyPacks] = useState(false)

  // useEffect(() => {
  //   if (privateMode) {
  //     dispatch(getCardPacksThunk(currentUserId))
  //   } else {
  //     dispatch(getCardPacksThunk())
  //   }
  // }, [privateMode])

  useEffect(() => {
    dispatch(getCardPacks())
  }, [page, pageCount, min, max, user_id, pageCount, sortPacks, packName])

  useEffect(() => {
    isMyPacks
      ? dispatch(changeQueryParamsValues({ queryParamsValues: { user_id: currentUserId } }))
      : dispatch(changeQueryParamsValues({ queryParamsValues: { user_id: '' } }))
  }, [isMyPacks])

  if (!isLoggedIn) {
    return <Navigate to={Path.SingIn} />
  }

  return (
    <div className={style.pageContainer}>
      <div className={style.pageNameContainer}>
        <h2>Packs list</h2>
      </div>
      <div className={style.btnPanel}>
        <MyCardsOnlySwitch isMyPacks={isMyPacks} setIsMyPacks={setIsMyPacks} />

        <AddNewCardPackModal />
      </div>
      <div className={style.tableContainer}>
        <CardPackTable cardPacks={cardPacks} />
        <div className={style.pagination}>
          <PacksPagination
            currentUserId={currentUserId}
            isMyPacks={isMyPacks}
            totalPages={Math.ceil(totalPacks / currentPagePacksCount)}
          />
        </div>
      </div>
    </div>
  )
}
