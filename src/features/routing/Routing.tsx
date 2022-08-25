import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Path } from '../../common/enums/Path'
import { SignUp } from '../signUp/SignUp'
import { SignIn } from '../signIn/SignIn'
import { PersonalInformation } from '../personalInformation/PersonalInformation'
import { ForgotPassword } from '../recoveryPassword/ForgotPasswordPage/ForgotPassword'
import { Layout } from './Layout'
import { CreateNewPassword } from '../recoveryPassword/CreateNewPasswordPage/CreateNewPassword'
import { CheckEmail } from '../recoveryPassword/CheckEmailPage/CheckEmail'
import Typography from '@mui/material/Typography'

export const Routing = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route index element={<PersonalInformation />} />
        <Route path={`${Path.SingUp}`} element={<SignUp />} />
        <Route path={Path.SingIn} element={<SignIn />} />
        <Route path={Path.PersonalInformation} element={<PersonalInformation />} />
        <Route path={Path.ForgotPassword} element={<ForgotPassword />} />
        <Route path={Path.CheckEmail} element={<CheckEmail />} />
        <Route path={Path.CreateNewPassword} element={<CreateNewPassword />} />
        <Route
          path={Path.Page404}
          element={<Typography variant={'h3'}>PAGE NOT FOUND :-(</Typography>}
        />
        <Route path={'*'} element={<Navigate to={Path.Page404} />} />
      </Route>
    </Routes>
  )
}
