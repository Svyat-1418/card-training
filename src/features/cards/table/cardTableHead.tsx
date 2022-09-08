import { TableCell, TableHead, TableRow } from '@mui/material'
import React from 'react'

export const CardTableHead = () => {
  const columns = [
    { field: 'question', headerName: 'Question', width: 400 },
    { field: 'answer', headerName: 'Answer', width: 400 },
    { field: 'updated', headerName: 'Last Updated', width: 200 },
    { field: 'grade', headerName: 'Grade', width: 170 },
    { field: 'actions', headerName: '', width: 170 },
  ]

  return (
    <TableHead>
      <TableRow>
        {columns.map((col) => {
          return (
            <TableCell align={'left'} key={col.headerName + Math.random()} width={col.width}>
              {col.headerName}
            </TableCell>
          )
        })}
      </TableRow>
    </TableHead>
  )
}
