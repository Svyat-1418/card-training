import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../common/hooks'
import { SendEmailThunk } from '../recoveryPasswordSlice'

export const ForgotPassword = () => {
  let isSendSuccess = useAppSelector((state) => state.forgotPassword.isSendSuccess)
  let [email, setEmail] = useState<string>('')
  let dispatch = useAppDispatch()
  console.log(isSendSuccess)

  const sendEmailHandler = () => {
    dispatch(SendEmailThunk(email))
  }

  return (
    <div>
      <h1>forgot pass page</h1>
      <input type="email" onChange={(e) => setEmail(e.currentTarget.value)} />
      <button onClick={sendEmailHandler}>send instructions</button>
      {isSendSuccess && <Navigate to={'/check-email'} />}
    </div>
  )
}
