import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import TextField from '@mui/material/TextField'
import { useAppDispatch } from '../../../common/hooks'
import { editCardPackThunk } from '../cardPacksSlice'

type EditablePackNamePropsTypes = {
  _id: string
  startName: string
  setEditModeCb: (id: string) => void
}

export const EditablePackName: React.FC<EditablePackNamePropsTypes> = ({
  _id,
  startName,
  setEditModeCb,
}) => {
  let dispatch = useAppDispatch()
  const [newText, setNewText] = useState(startName)
  const [localError, setLocalError] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewText(event.currentTarget.value)
  }

  const editPackNameValidation = () => {
    if (newText) {
      dispatch(editCardPackThunk(_id, newText))
      setEditModeCb('')
    } else {
      setLocalError('empty input')
    }
  }

  const handlePressKeyEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      editPackNameValidation()
    }
  }
  const onBlurHandler = () => {
    editPackNameValidation()
  }

  return (
    <div>
      <TextField
        variant={'standard'}
        fullWidth
        value={newText}
        autoFocus
        onChange={handleChange}
        onKeyPress={handlePressKeyEnter}
        onBlur={onBlurHandler}
        error={!!localError}
        helperText={localError}
      />
    </div>
  )
}
