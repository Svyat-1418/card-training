import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableBody from '@mui/material/TableBody'
import Paper from '@mui/material/Paper'
import { CardPacksType, getCardPacksThunk } from './cardPacksSlice'
import { useAppDispatch, useAppSelector } from '../../common/hooks'
import { Actions } from './components/ActionsComponent'
import { EditablePackName } from './components/EditablePackNameComponent'
import styles from './cardPacks.module.css'
import { AddNewPack } from './components/AddNewPackComponent'
import { MyCardsOnlySwitch } from './components/MyCardsOnlySwitch'
import { NavLink } from 'react-router-dom'
import { setPackIdAC } from '../cards/cards-slice'

export const CardPacksPage = () => {
  let currentUserId = useAppSelector((state) => state.app.userData._id)
  let privateMode = useAppSelector((state) => state.cardPacks.privateMode)
  let cardPacks: CardPacksType[] = useAppSelector((state) => state.cardPacks.cardPacks)
  let dispatch = useAppDispatch()
  let [editModeId, setEditModeId] = useState<string>('')

  useEffect(() => {
    if (privateMode) {
      dispatch(getCardPacksThunk(currentUserId))
    } else {
      dispatch(getCardPacksThunk())
    }
  }, [privateMode])

  const setEditModeIdCb = (id: string) => {
    setEditModeId(id)
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.btnFlex}>
        <AddNewPack />
        <MyCardsOnlySwitch privateMode={privateMode} />
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Cards</TableCell>
              <TableCell align="right">Last updated</TableCell>
              <TableCell align="right">Created by</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cardPacks.map((pack: CardPacksType) => {
              const onPackClickHandler = () => {
                dispatch(setPackIdAC({ packId: pack._id }))
              }
              return (
                <TableRow key={pack._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {pack._id === editModeId ? (
                      <EditablePackName
                        _id={pack._id}
                        startName={pack.name}
                        setEditModeCb={setEditModeIdCb}
                      />
                    ) : (
                      <NavLink to={`/card-page`} onClick={onPackClickHandler}>
                        `${pack.name}`
                      </NavLink>
                    )}
                  </TableCell>
                  <TableCell align="right">{pack.cardsCount}</TableCell>
                  <TableCell align="right">{pack.updated}</TableCell>
                  <TableCell align="right">{pack.created}</TableCell>
                  <TableCell align="right">
                    <Actions
                      currentName={pack.name}
                      userId={pack.user_id}
                      packId={pack._id}
                      setEditModeCb={setEditModeIdCb}
                    />
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
