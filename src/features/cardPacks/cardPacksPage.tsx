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

export const CardPacksPage = () => {
  let cardPacks: CardPacksType[] = useAppSelector((state) => state.cardPacks.cardPacks)
  let dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getCardPacksThunk())
  }, [])
  // let [editModeId, setEditModeId] = useState<string | null>(null)

  const setEditModeIDCb = (id: string) => {
    setEditModeId(id)
  }

  return (
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
          {cardPacks.map((pack: CardPacksType) => (
            <TableRow key={pack._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {pack._id === editModeId ? (
                  <EditablePackName _id={pack._id} startName={pack.name}/>
                ) : (
                  `${pack.name}`
                )}
              </TableCell>
              <TableCell align="right">{pack.cardsCount}</TableCell>
              <TableCell align="right">{pack.updated}</TableCell>
              <TableCell align="right">{pack.created}</TableCell>
              <TableCell align="right">
                <Actions currentName={pack.name} id={pack._id} setEditModeCb={setEditModeIDCb} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
