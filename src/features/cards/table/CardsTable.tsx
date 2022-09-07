import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'
import { useSelector } from 'react-redux'
import { RootStateType } from '../../../app/store'
import { CardType } from '../cardsApi'
import React from 'react'
import { CardTableHead } from './cardTableHead'
import { CrudTableOperations } from './crudTableOperations'
import style from '../cards.module.css'
import { ConvertDate } from '../../../common/utils/convertDate'

type ComponentType = {
  packId: string | undefined
}

export const CardsTable = (props: ComponentType) => {
  const rows = useSelector<RootStateType, CardType[]>((state) => state.cards.cardsData.cards)

  return (
    <TableContainer className={style.tableContainer}>
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
