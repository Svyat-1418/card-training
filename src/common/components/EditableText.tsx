import React, { ChangeEvent, KeyboardEvent, useState } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CreateIcon from '@mui/icons-material/Create'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2'
type EditableTextProps = {
  text: string
  variant: Variant
  newTextCallback: (newText: string) => void
}

export const EditableText = (props: EditableTextProps) => {
  const { text, variant, newTextCallback } = props

  const [editMode, setEditMode] = useState(false)
  const [newText, setNewText] = useState(text)
  const [localError, setLocalError] = useState<string>('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewText(event.currentTarget.value)
  }

  const handleClickSave = () => {
    if (!newText) {
      setLocalError('Fill in this field')
    } else {
      newTextCallback(newText)
      setEditMode(false)
    }
  }

  const handleClickEditIcon = () => {
    setEditMode(true)
  }
  const handlePressKeyEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (localError) {
      setLocalError('')
    }
    if (e.key === 'Enter') {
      handleClickSave()
    }
  }

  if (editMode) {
    return (
      <Box>
        <TextField
          variant={'standard'}
          fullWidth
          value={newText}
          autoFocus
          onChange={handleChange}
          onKeyPress={handlePressKeyEnter}
          error={!!localError}
          helperText={localError}
        />
        <Button onClick={handleClickSave}>Save</Button>
      </Box>
    )
  } else {
    return (
      <Typography variant={variant} color="text.secondary">
        {newText}
        <IconButton onClick={handleClickEditIcon}>
          <CreateIcon />
        </IconButton>
      </Typography>
    )
  }
}
