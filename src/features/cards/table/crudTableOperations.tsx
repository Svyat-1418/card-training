import { TableCell } from '@mui/material'
import React from 'react'
import { DeleteCardModal } from '../modals/deleteCardModal'
import { EditCardModal } from '../modals/editCardModal'

type ComponentType = {
  packId?: string
  cardId: string
  rating: number
  answer: string
  question: string
}

export const CrudTableOperations = (props: ComponentType) => {
  return (
    <TableCell valign={'middle'}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <EditCardModal
          cardId={props.cardId}
          packId={props.packId}
          question={props.question}
          answer={props.answer}
        />
        <DeleteCardModal cardId={props.cardId} packId={props.packId} />
      </div>
    </TableCell>
  )
}
