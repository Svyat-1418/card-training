import React, { ChangeEvent, KeyboardEventHandler, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../common/hooks'
import { SendEmailThunk } from '../recoveryPasswordSlice'
import { PATH } from '../../../common/enums/path'
import { Button, LinearProgress, TextField } from '@mui/material'
import styles from '../RecoveryPassword.module.css'

export const ForgotPassword = () => {
  let isEmailSendSuccess = useAppSelector((state) => state.forgotPassword.isEmailSendSuccess)
  let errorMessageFromApi = useAppSelector((state) => state.forgotPassword.errorMessage)
  let isFetching = useAppSelector((state) => state.forgotPassword.isFetching)
  let [email, setEmail] = useState<string>('')
  let [errorMessage, setErrorMessage] = useState<string>('')
  let dispatch = useAppDispatch()

  const onChangeTextFieldHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmail(e.currentTarget.value)
  }
  const sendEmailValidation = () => {
    if (isFetching) {
      setErrorMessage('')
    }
    if (email) {
      dispatch(SendEmailThunk(email))
      setErrorMessage(errorMessageFromApi)
    } else {
      setErrorMessage('empty input')
    }
  }
  const sendEmailClickHandler = () => {
    sendEmailValidation()
  }
  //@ts-ignore
  const sendEmailKeyHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      sendEmailValidation()
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
      {isEmailSendSuccess && <Navigate to={PATH.CheckEmail} />}
    </div>
  )
}
