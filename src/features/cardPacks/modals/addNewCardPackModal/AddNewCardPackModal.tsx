import React, { ChangeEvent, useState } from 'react'

import Button from '@mui/material/Button'

import { BasicModal } from '../../../../common/modal/Basicmodal'

import { createCardPack } from '../../cardPacksSlice'
import { useAppDispatch } from '../../../../common/hooks'

import styles from './AddNewCardPackModal.module.css'
import { Checkbox, TextField } from '@mui/material'

export const AddNewCardPackModal = () => {
  const dispatch = useAppDispatch()

  const [packName, setPackName] = useState('')
  const [isPrivate, setIsPrivate] = useState(false)

  const [open, setOpen] = useState(false)

  const handleClose = () => setOpen(false)

  const handleOpen = () => setOpen(true)

  const handleChangePackName = (event: ChangeEvent<HTMLInputElement>) => {
    setPackName(event.currentTarget.value)
  }

  const handleChangeIsPrivate = (event: ChangeEvent<HTMLInputElement>) => {
    setIsPrivate(event.currentTarget.checked)
  }

  const handleClickAdd = () => {
    dispatch(createCardPack({ cardsPack: { name: packName, private: isPrivate } }))
    setOpen(false)
  }

  return (
    <>
      <Button onClick={handleOpen}>Add new Pack</Button>

      <BasicModal open={open} handleClose={handleClose} modalName={'Add New Pack'}>
        <div className={styles.textContainer}>
          <TextField
            variant={'standard'}
            value={packName}
            onChange={handleChangePackName}
            label={'Pack name'}
            fullWidth
            placeholder={'Enter pack name'}
            autoFocus
          />

          <span>
            <Checkbox checked={isPrivate} onChange={handleChangeIsPrivate} />
            Private
          </span>
        </div>
        <div className={styles.buttonBlock}>
          <Button variant={'contained'} onClick={handleClose}>
            Close
          </Button>
          <Button variant={'contained'} color={'success'} onClick={handleClickAdd}>
            Add
          </Button>
        </div>
      </BasicModal>
    </>
  )
}
