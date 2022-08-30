import React, { useEffect } from 'react'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableBody from '@mui/material/TableBody'
import Paper from '@mui/material/Paper'
import { CardPacksType, getCardPacksThunk } from './cardPacksSlice'
import { useAppDispatch, useAppSelector } from '../../common/hooks'
import { Actions } from './ActionsComponent'

export const CardPacksPage = () => {
  let cardPacks: CardPacksType[] = useAppSelector((state) => state.cardPacks.cardPacks)
  let dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getCardPacksThunk())
  }, [])

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
                {pack.name}
              </TableCell>
              <TableCell align="right">{pack.cardsCount}</TableCell>
              <TableCell align="right">{pack.updated}</TableCell>
              <TableCell align="right">{pack.created}</TableCell>
              <TableCell align="right">
                <Actions />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
