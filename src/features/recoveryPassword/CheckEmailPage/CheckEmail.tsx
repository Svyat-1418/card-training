import React from 'react'
import { Link } from 'react-router-dom'
import { Path } from '../../../common/enums/Path'
import styles from '../RecoveryPassword.module.css'
import { useAppSelector } from '../../../common/hooks'
import { Button } from '@mui/material'

export const CheckEmail = () => {
  let recoveryEmail = useAppSelector((state) => state.forgotPassword.recoveryEmail)
  return (
    <div className={styles.container}>
      <h1>Now check email </h1>
      <h2>{recoveryEmail}</h2>
      <Link to={Path.SingIn}>
        <Button variant="text">Back to log in</Button>
      </Link>
    </div>
  )
}
