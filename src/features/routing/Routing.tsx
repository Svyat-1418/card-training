import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Path } from '../../common/enums/Path'
import { SignUp } from '../signUp/SignUp'
import { SignIn } from '../signIn/SignIn'
import { PersonalInformation } from '../personalInformation/PersonalInformation'
import { ForgotPassword } from '../recoveryPassword/ForgotPassword'
import { Layout } from './Layout'

export const Routing = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route path={`${Path.SingUp}`} element={<SignUp />} />
        <Route path={Path.SingIn} element={<SignIn />} />
        <Route path={Path.PersonalInformation} element={<PersonalInformation />} />
        <Route path={Path.ForgotPassword} element={<ForgotPassword />} />
        <Route path={Path.CheckEmail} element={<></>} />
        <Route path={Path.CreateNewPassword} element={<></>} />
        <Route path={Path.Page404} element={<></>} />
      </Route>
    </Routes>
  )
}
