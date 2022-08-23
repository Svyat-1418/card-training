import React, { ChangeEvent, KeyboardEventHandler, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../common/hooks'
import { SendEmailThunk } from '../recoveryPasswordSlice'
import { Path } from '../../../common/enums/Path'
import { Button, LinearProgress, TextField } from '@mui/material'
import styles from '../RecoveryPassword.module.css'

export const ForgotPassword = () => {
  let isEmailSendSuccess = useAppSelector((state) => state.forgotPassword.isEmailSendSuccess)
  let errorMessage = useAppSelector((state) => state.forgotPassword.errorMessage)
  let isFetching = useAppSelector((state) => state.forgotPassword.isFetching)
  let [email, setEmail] = useState<string>('')
  let dispatch = useAppDispatch()

  console.log(isEmailSendSuccess)

  const onChangeTextFieldHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmail(e.currentTarget.value)
  }
  const sendEmailClickHandler = () => {
    dispatch(SendEmailThunk(email))
  }
  const sendEmailKeyHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      dispatch(SendEmailThunk(email))
    }
  }

  return (
    <div className={styles.container}>
      <h1>Forgot your password ?</h1>
      <div className={styles.inputContainer}>
        <TextField
          fullWidth
          id="standard-basic"
          label="email"
          variant="standard"
          type="email"
          onChange={onChangeTextFieldHandler}
          onKeyPress={sendEmailKeyHandler}
        />
        {isFetching ? <LinearProgress className={styles.progress} /> : null}
      </div>

      <Button variant="text" onClick={sendEmailClickHandler}>
        send instructions
      </Button>

      <p className={styles.errorText}>{errorMessage}</p>
      {isEmailSendSuccess && <Navigate to={Path.CheckEmail} />}
    </div>
  )
}
