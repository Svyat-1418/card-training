import {
  Button,
  Rating,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { useSelector } from 'react-redux'
import { RootStateType } from '../../app/store'
import { CardType } from './cards-api'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import React from 'react'
import { useAppDispatch } from '../../common/hooks'
import { deleteCardThunk, updateCardThunk } from './cards-slice'

type ComponentType = {
  packId: string | undefined
}

export const CardsTable = (props: ComponentType) => {
  const dispatch = useAppDispatch()

  const convertDate = (date: string) => {
    const newDate = new Date(date)
    const formattedDate = `${newDate.toLocaleDateString()} ${newDate.toLocaleTimeString()}`
    return formattedDate
  }

  const columns = [
    { field: 'question', headerName: 'Question', width: 400 },
    { field: 'answer', headerName: 'Answer', width: 400 },
    { field: 'updated', headerName: 'Last Updated', width: 200 },
    { field: 'grade', headerName: 'Grade', width: 200 },
  ]

  const rows = useSelector<RootStateType, CardType[]>((state) => state.cards.cardsData.cards)

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((col) => {
              return (
                <TableCell key={col.headerName + Math.random()} width={col.width}>
                  {col.headerName}
                </TableCell>
              )
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            const onDeleteClickIcon = () => {
              props.packId && dispatch(deleteCardThunk(row._id, props.packId))
            }
            const onEditCardClick = () => {
              props.packId &&
                dispatch(
                  updateCardThunk(
                    {
                      card: {
                        _id: row._id,
                        question: 'UpdatedCard',
                        answer: 'Updated answer',
                      },
                    },
                    props.packId
                  )
                )
            }

            return (
              <TableRow
                key={row.question + Math.random()}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.question}
                </TableCell>
                <TableCell>{row.answer}</TableCell>
                <TableCell>{convertDate(row.updated)}</TableCell>
                <TableCell valign={'middle'}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Rating name="disabled" value={row.grade} disabled />
                    <Button onClick={onEditCardClick}>
                      <EditIcon fontSize={'small'} />
                    </Button>
                    <Button onClick={onDeleteClickIcon}>
                      <DeleteIcon fontSize={'small'} />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
