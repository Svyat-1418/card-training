import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../common/hooks'
import { SendEmailThunk } from '../recoveryPasswordSlice'

export const ForgotPassword = () => {
  let isEmailSendSuccess = useAppSelector((state) => state.forgotPassword.isEmailSendSuccess)
  let [email, setEmail] = useState<string>('')
  let dispatch = useAppDispatch()
  console.log(isEmailSendSuccess)

  const sendEmailHandler = () => {
    dispatch(SendEmailThunk(email))
  }

  return (
    <div>
      <h1>forgot pass page</h1>
      <input type="email" onChange={(e) => setEmail(e.currentTarget.value)} />
      <button onClick={sendEmailHandler}>send instructions</button>
      {isEmailSendSuccess && <Navigate to={'/check-email'} />}
    </div>
  )
}
