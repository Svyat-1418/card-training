import {
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

export const CardsTable = () => {
  const columns = [
    { field: 'question', headerName: 'Question', width: 400 },
    { field: 'answer', headerName: 'Answer', width: 400 },
    { field: 'updated', headerName: 'Last Updated', width: 200 },
    { field: 'grade', headerName: 'Grade', width: 200 },
  ]

  const rows = useSelector<RootStateType, CardType[]>((state) => state.cards.cards)

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
          {rows.map((row) => (
            <TableRow
              key={row.question + Math.random()}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.question}
              </TableCell>
              <TableCell>{row.answer}</TableCell>
              <TableCell>{row.updated}</TableCell>
              <TableCell valign={'middle'}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Rating name="disabled" value={row.grade} disabled />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
