import * as React from 'react'
import { ChangeEvent, KeyboardEvent, useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'
import { useAppDispatch } from '../../../common/hooks'
import { createCardPackThunk } from '../cardPacksSlice'

export const AddNewPack = () => {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [localError, setLocalError] = useState('')

  let dispatch = useAppDispatch()
  const handleOpen = () => {
    setOpen(true)
    setName('')
    setLocalError('')
  }
  const handleClose = () => setOpen(false)

  const addPackValidation = () => {
    if (name) {
      dispatch(createCardPackThunk(name))
      setOpen(false)
      setLocalError('')
    } else {
      !localError && setLocalError('empty input')
    }
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setName(e.currentTarget.value)
    setLocalError('')
  }
  const handlePressKeyEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && localError !== 'empty input') {
      addPackValidation()
    }
  }
  const handleOnClick = () => {
    addPackValidation()
  }
  const handleOnBlur = () => {
    if (name) {
      setLocalError('add or cancel ?')
    } else {
      setLocalError('empty input')
    }
  }

  return (
    <div>
      <Button onClick={handleOpen}>add new pack</Button>
      <Modal open={open}>
        <Box sx={style}>
          <TextField
            variant={'standard'}
            fullWidth
            value={name}
            autoFocus
            onChange={handleChange}
            onKeyPress={handlePressKeyEnter}
            onBlur={handleOnBlur}
            error={!!localError}
            helperText={localError}
          />
          <Button onClick={handleOnClick}>add</Button>
          <Button onClick={handleClose}>cancel</Button>
        </Box>
      </Modal>
    </div>
  )
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}
