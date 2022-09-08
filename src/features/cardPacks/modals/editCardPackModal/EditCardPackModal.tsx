import React, { ChangeEvent, useState } from 'react'

import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'

import { BasicModal } from '../../../../common/modal/Basicmodal'

import { updataCardPack } from '../../cardPacksSlice'
import { useAppDispatch } from '../../../../common/hooks'

import styles from './EditCardPackModal.module.css'
import EditIcon from '@mui/icons-material/Edit'

type PropsType = {
  id: string
  currentName: string
}

export const EditCardPackModal = ({ id, currentName }: PropsType) => {
  const dispatch = useAppDispatch()

  const [newPackName, setNewPackName] = useState(currentName)
  const [isPrivate, setIsPrivate] = useState(false)

  const [open, setOpen] = useState(false)

  const handleClose = () => setOpen(false)

  const handleOpen = () => setOpen(true)

  const handleChangePackName = (event: ChangeEvent<HTMLInputElement>) => {
    setNewPackName(event.currentTarget.value)
  }

  const handleChangeIsPrivate = (event: ChangeEvent<HTMLInputElement>) => {
    setIsPrivate(event.currentTarget.checked)
  }

  const handleClickSave = () => {
    dispatch(updataCardPack({ cardsPack: { _id: id, name: newPackName, private: isPrivate } }))
    setOpen(false)
  }

  return (
    <>
      <Button onClick={handleOpen}>
        <EditIcon fontSize={'small'} />
      </Button>

      <BasicModal open={open} handleClose={handleClose} modalName={'Add New Pack'}>
        <div className={styles.textContainer}>
          <TextField
            variant={'standard'}
            value={newPackName}
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
          <Button variant={'contained'} color={'success'} onClick={handleClickSave}>
            Save
          </Button>
        </div>
      </BasicModal>
    </>
  )
}
