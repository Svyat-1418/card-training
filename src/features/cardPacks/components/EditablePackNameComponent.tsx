import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import TextField from '@mui/material/TextField'
import { useAppDispatch } from '../../../common/hooks'
import { editCardPackThunk } from '../cardPacksSlice'

type EditablePackNamePropsTypes = {
  _id: string
  startName: string
}
export const EditablePackName: React.FC<EditablePackNamePropsTypes> = ({ _id, startName }) => {
  let dispatch = useAppDispatch()
  const [newText, setNewText] = useState(startName)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewText(event.currentTarget.value)
  }

  const handlePressKeyEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      dispatch(editCardPackThunk(_id, newText))
    }
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
        // onBlur={onBlurHandler}
        // error={!!localError}
        // helperText={localError}
      />
    </div>
  )
}
