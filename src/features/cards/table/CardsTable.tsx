import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'
import React from 'react'
import { CardTableHead } from './cardTableHead'
import { CrudTableOperations } from './crudTableOperations'
import { ConvertDate } from '../../../common/utils/convertDate'
import { useAppSelector } from '../../../common/hooks'

type ComponentType = {
  packId: string | undefined
}

export const CardsTable = (props: ComponentType) => {
  const rows = useAppSelector((state) => state.cards.cardsData.cards)

  return (
    <TableContainer component={Paper}>
      <Table>
        <CardTableHead />
        <TableBody>
          {rows.map((row) => {
            return (
              <TableRow
                key={row.question + Math.random()}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.question}
                </TableCell>
                <TableCell>{row.answer}</TableCell>
                <TableCell>{ConvertDate(row.updated)}</TableCell>
                <CrudTableOperations packId={props.packId} cardId={row._id} rating={row.rating} />
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
