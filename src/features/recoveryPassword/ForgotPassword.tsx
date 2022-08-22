import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../common/hooks'

export const ForgotPassword = () => {
  let currentEmail = useAppSelector((state) => state.resetPassword.email)
  let [email, setEmail] = useState<string>('')
  let dispatch = useAppDispatch()
  console.log(currentEmail)

  const sendEmailHandler = () => {}

  return (
    <div>
      <h1>forgot pass page</h1>
      <form action="">
        <input type="email" onChange={(e) => setEmail(e.currentTarget.value)} />
        <button onClick={sendEmailHandler}>sent instructions</button>
      </form>
    </div>
  )
}
