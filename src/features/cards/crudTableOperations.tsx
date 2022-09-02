import { Button, Rating, TableCell } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import React from 'react'
import { deleteCardThunk, updateCardThunk } from './cards-slice'
import { useAppDispatch } from '../../common/hooks'

type ComponentType = {
  packId: string | undefined
  cardId: string
  rating: number
}

export const CrudTableOperations = (props: ComponentType) => {
  const dispatch = useAppDispatch()

  const onDeleteClickIcon = () => {
    props.packId && dispatch(deleteCardThunk(props.cardId, props.packId))
  }
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
        <Button onClick={onDeleteClickIcon}>
          <DeleteIcon fontSize={'small'} />
        </Button>
      </div>
    </TableCell>
  )
}
