import React, { ChangeEvent, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../common/hooks'
import { setNewPasswordThunk } from '../recoveryPasswordSlice'
import { PATH } from '../../../common/enums/path'
import styles from '../RecoveryPassword.module.css'
import { Button, LinearProgress, TextField } from '@mui/material'

export const CreateNewPassword = () => {
  let isFetching = useAppSelector((state) => state.forgotPassword.isFetching)
  let token = useParams()
  let dispatch = useAppDispatch()
  let [newPassword, setNewPassword] = useState<string>('')
  let [repeatNewPassword, setRepeatNewPassword] = useState<string>('')
  let isNewPasswordAccepted = useAppSelector((state) => state.forgotPassword.isNewPasswordAccepted)

  const onChangeNewPasswordHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewPassword(e.currentTarget.value)
  }
  // const setNewPasswordKeyHandler = (e: KeyboardEvent<HTMLInputElement>) => {
  //     if (e.key === 'Enter') {}
  // }
  const onChangeRepeatNewPasswordHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRepeatNewPassword(e.currentTarget.value)
  }
  const setNewPasswordHandler = () => {
    if (token && newPassword === repeatNewPassword) {
      dispatch(setNewPasswordThunk(newPassword, token['*']))
    }
  }

  return (
    <div className={styles.container}>
      <h1>Set new password</h1>
      <div className={styles.inputContainer}>
        <TextField
          fullWidth
          id="standard-basic"
          label="new password"
          variant="standard"
          type="password"
          onChange={onChangeNewPasswordHandler}
        />
        <TextField
          fullWidth
          id="standard-basic"
          label="repeat new password"
          variant="standard"
          type="password"
          onChange={onChangeRepeatNewPasswordHandler}
        />
        {isFetching ? <LinearProgress className={styles.progress} /> : null}
      </div>

      <Button variant="text" onClick={setNewPasswordHandler}>
        change password
      </Button>
      {newPassword !== repeatNewPassword && <div>passwords doesnt match</div>}
      {isNewPasswordAccepted && <Navigate to={PATH.PersonalInformation} />}
    </div>
  )
}
