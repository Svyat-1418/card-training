import React, {useState} from 'react'
import {Navigate, useParams} from 'react-router-dom'
import {useAppDispatch, useAppSelector} from '../../../common/hooks'
import {setNewPasswordThunk} from '../recoveryPasswordSlice'

export const CreateNewPassword = () => {
  let token = useParams()
  let dispatch = useAppDispatch()
  let [newPassword, setNewPassword] = useState<string>('')
  let createNewPasswordStatus = useAppSelector(
    (state) => state.forgotPassword.createNewPasswordStatus
  )
  console.log(token['*'])
  console.log(createNewPasswordStatus)

  const setNewPasswordHandler = () => {
    if (token) {
      dispatch(setNewPasswordThunk(newPassword, token['*']))
    }
  }

  return (
    <div>
      <h1>create password page</h1>
      <input
        type="password"
        placeholder="new password"
        onChange={(event) => setNewPassword(event.currentTarget.value)}
      />
      <input type="password" placeholder="repeat new password" />
      <button onClick={setNewPasswordHandler}>set new password</button>
      {createNewPasswordStatus && <Navigate to={'/personal-information'} />}
    </div>
  )
}
