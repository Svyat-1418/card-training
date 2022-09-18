import DeleteIcon from '@mui/icons-material/Delete'
import { Button } from '@mui/material'
import React from 'react'
import { BasicModal } from '../../../common/modal/Basicmodal'
import { deleteCardThunk } from '../cardsSlice'
import { useAppDispatch } from '../../../common/hooks'
import style from './modal.module.css'

type PropsType = {
  cardId: string
  packId?: string
}

export const DeleteCardModal = ({ cardId, packId }: PropsType) => {
  const dispatch = useAppDispatch()

  const [open, setOpen] = React.useState(false)

  const handleClose = () => setOpen(false)

  const handleOpen = () => setOpen(true)

  const deletePackHandler = () => {
    setOpen(false)
    packId && dispatch(deleteCardThunk(cardId, packId))
  }

  return (
    <>
      <Button onClick={handleOpen}>
        <DeleteIcon fontSize={'small'} />
      </Button>
      <BasicModal open={open} handleClose={handleClose} modalName={'Delete card'}>
        <div className={style.textContainer}>
          <span>
            Do you really want to remove <b>card</b>?
          </span>
          <span>the card will be permanently deleted.</span>
        </div>
        <div className={style.buttonBlock}>
          <Button variant={'contained'} onClick={handleClose}>
            Close
          </Button>
          <Button variant={'contained'} color={'error'} onClick={deletePackHandler}>
            Delete
          </Button>
        </div>
      </BasicModal>
    </>
  )
}
