import React, { useState } from 'react'

import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'

import { BasicModal } from '../../../../common/modal/Basicmodal'

import { deleteCardPack } from '../../cardPacksSlice'
import { useAppDispatch } from '../../../../common/hooks'

import styles from './DeleteCardPackModal.module.css'

type PropsType = {
  id: string
  packName: string
}

export const DeleteCardPackModal = ({ id, packName }: PropsType) => {
  const dispatch = useAppDispatch()

  const [open, setOpen] = useState(false)

  const handleClose = () => setOpen(false)

  const handleOpen = () => setOpen(true)

  const handleClickDelete = () => {
    dispatch(deleteCardPack(id))
    setOpen(false)
  }

  return (
    <>
      <Button onClick={handleOpen}>
        <DeleteIcon fontSize={'small'} />
      </Button>

      <BasicModal open={open} handleClose={handleClose} modalName={'Delete Pack'}>
        <div className={styles.textContainer}>
          <span>
            Do you really want to remove pack <strong>{packName}</strong>?
          </span>
          <span>All cards from this pack will also be deleted.</span>
        </div>
        <div className={styles.buttonBlock}>
          <Button variant={'contained'} onClick={handleClose}>
            Close
          </Button>
          <Button variant={'contained'} color={'error'} onClick={handleClickDelete}>
            Delete
          </Button>
        </div>
      </BasicModal>
    </>
  )
}
