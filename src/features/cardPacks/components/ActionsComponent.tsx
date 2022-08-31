import { Button } from '@mui/material'
import React, { useState } from 'react'
import styles from '../cardPacks.module.css'
import { useAppDispatch } from '../../../common/hooks'

type ActionsPropsTypes = {
  setEditModeCb: (id: string) => void
  currentName: string
  id: string
}

export const Actions: React.FC<ActionsPropsTypes> = ({ currentName, id, setEditModeCb }) => {
  const createOnClickHandler = () => {}

  const editOnClickHandler = () => {
    setEditModeCb(id)
  }
  const deleteOnClickHandler = () => {}
  return (
    <div className={styles.btnFlex}>
      <Button onClick={createOnClickHandler}>create</Button>
      <Button onClick={editOnClickHandler}>edit</Button>
      <Button onClick={deleteOnClickHandler}>delete</Button>
    </div>
  )
}
