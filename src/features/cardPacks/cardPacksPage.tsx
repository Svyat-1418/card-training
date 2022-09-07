import React, { useEffect } from 'react'
import { CardPacksType, getCardPacksThunk } from './cardPacksSlice'
import { useAppDispatch, useAppSelector } from '../../common/hooks'
import style from './cardPacks.module.css'
import { AddNewPack } from './components/AddNewPackComponent'
import { MyCardsOnlySwitch } from './components/MyCardsOnlySwitch'
import { PacksTable } from './components/PacksTable'
import { PacksPagination } from './components/PacksPagination'

export const CardPacksPage = () => {
  let currentUserId = useAppSelector((state) => state.app.userData._id)
  let privateMode = useAppSelector((state) => state.cardPacks.privateMode)
  let totalPacks = useAppSelector((state) => state.cardPacks.cardPacksInfo.cardPacksTotalCount)
  let currentPagePacksCount = useAppSelector((state) => state.cardPacks.cardPacksInfo.pageCount)

  let cardPacks: CardPacksType[] = useAppSelector(
    (state) => state.cardPacks.cardPacksInfo.cardPacks
  )

  let dispatch = useAppDispatch()

  useEffect(() => {
    if (privateMode) {
      dispatch(getCardPacksThunk(currentUserId))
    } else {
      dispatch(getCardPacksThunk())
    }
  }, [privateMode])

  return (
    <div className={style.pageContainer}>
      <div className={style.btnPanel}>
        <AddNewPack />
        <MyCardsOnlySwitch privateMode={privateMode} />
      </div>
      <div className={style.tableContainer}>
        <PacksTable cardPacks={cardPacks} />
        <div className={style.pagination}>
          <PacksPagination
            currentUserId={currentUserId}
            privateMode={privateMode}
            totalPages={Math.ceil(totalPacks / currentPagePacksCount)}
          />
        </div>
      </div>
    </div>
  )
}
