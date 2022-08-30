import { Button } from '@mui/material'
import React from 'react'
import styles from './cardPacks.module.css'

export const Actions = () => {
  return (
    <div className={styles.btnFlex}>
      <Button>create</Button>
      <Button>edit</Button>
      <Button>delete</Button>
    </div>
  )
}
