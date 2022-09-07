import { Button, Rating, TableCell } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import React from 'react'
import { updateCardThunk } from '../cardsSlice'
import { useAppDispatch } from '../../../common/hooks'
import { DeleteCardModal } from '../modals/deleteCardModal'

type ComponentType = {
  packId?: string
  cardId: string
  rating: number
}

export const CrudTableOperations = (props: ComponentType) => {
  const dispatch = useAppDispatch()

  const onEditCardClick = () => {
    props.packId &&
      dispatch(
        updateCardThunk(
          {
            card: {
              _id: props.cardId,
              question: 'UpdatedCard',
              answer: 'Updated answer',
            },
          },
          props.packId
        )
      )
  }

  return (
    <TableCell valign={'middle'}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Rating name="disabled" value={props.rating} disabled />
        <Button onClick={onEditCardClick}>
          <EditIcon fontSize={'small'} />
        </Button>
        <DeleteCardModal cardId={props.cardId} packId={props.packId} />
      </div>
    </TableCell>
  )
}
