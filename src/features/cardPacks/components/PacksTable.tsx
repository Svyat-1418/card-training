import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'
import { CardPacksType } from '../cardPacksSlice'
import { EditablePackName } from './EditablePackNameComponent'
import { Actions } from './ActionsComponent'
import TableContainer from '@mui/material/TableContainer'
import { NavLink } from 'react-router-dom'
import { ConvertDate } from '../../../common/utils/convertDate'

type PacksTablePropsType = {
  cardPacks: CardPacksType[]
}

export const PacksTable: React.FC<PacksTablePropsType> = ({ cardPacks }) => {
  let [editModeId, setEditModeId] = useState<string>('')
  const setEditModeIdCb = (id: string) => {
    setEditModeId(id)
  }

  return (
    <TableContainer component={Paper}>
      <Table>
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
                  <EditablePackName
                    _id={pack._id}
                    startName={pack.name}
                    setEditModeCb={setEditModeIdCb}
                  />
                ) : (
                  <NavLink to={`/card-page/${pack._id}`}>{pack.name.slice(0, 25)}</NavLink>
                )}
              </TableCell>
              <TableCell align="right">{pack.cardsCount}</TableCell>
              <TableCell align="right">{ConvertDate(pack.updated)}</TableCell>
              <TableCell align="right">{ConvertDate(pack.created)}</TableCell>
              <TableCell align="right">
                <Actions
                  currentName={pack.name}
                  userId={pack.user_id}
                  packId={pack._id}
                  setEditModeCb={setEditModeIdCb}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}