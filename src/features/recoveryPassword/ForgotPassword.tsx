import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../common/hooks'
import { SendEmailThunk } from './ForgotPasswordSlice'

export const ForgotPassword = () => {
  let currentEmail = useAppSelector((state) => state.forgotPassword.email)
  let [email, setEmail] = useState<string>('')
  let dispatch = useAppDispatch()
  console.log(currentEmail)

  const sendEmailHandler = () => {
    dispatch(SendEmailThunk(email))
  }

  return (
    <div>
      <h1>forgot pass page</h1>
      <form action="">
        <input type="email" onChange={(e) => setEmail(e.currentTarget.value)} />
        <button onClick={sendEmailHandler}>send instructions</button>
      </form>
    </div>
  )
}
