import React, { useEffect } from 'react'
import { CardPacksType, getCardPacksThunk } from './cardPacksSlice'
import { useAppDispatch, useAppSelector } from '../../common/hooks'
import styles from './cardPacks.module.css'
import { AddNewPack } from './components/AddNewPackComponent'
import { MyCardsOnlySwitch } from './components/MyCardsOnlySwitch'
import { PacksTable } from './components/PacksTable'

export const CardPacksPage = () => {
  let currentUserId = useAppSelector((state) => state.app.userData._id)
  let privateMode = useAppSelector((state) => state.cardPacks.privateMode)
  let cardPacks: CardPacksType[] = useAppSelector((state) => state.cardPacks.cardPacks)
  let dispatch = useAppDispatch()

  useEffect(() => {
    if (privateMode) {
      dispatch(getCardPacksThunk(currentUserId))
    } else {
      dispatch(getCardPacksThunk())
    }
  }, [privateMode])

  return (
    <div className={styles.pageContainer}>
      <div className={styles.btnFlex}>
        <AddNewPack />
        <MyCardsOnlySwitch privateMode={privateMode} />
      </div>
      <PacksTable cardPacks={cardPacks} />
    </div>
  )
}
