import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { PATH } from '../../common/enums/path'
import { SignUp } from '../signUp/SignUp'
import { SignIn } from '../signIn/SignIn'
import { PersonalInformation } from '../personalInformation/PersonalInformation'
import { ForgotPassword } from '../recoveryPassword/ForgotPasswordPage/ForgotPassword'
import { Layout } from './Layout'
import { CreateNewPassword } from '../recoveryPassword/CreateNewPasswordPage/CreateNewPassword'
import { CheckEmail } from '../recoveryPassword/CheckEmailPage/CheckEmail'
import Typography from '@mui/material/Typography'
import { CardPacksPage } from '../cardPacks/cardPacksPage'
import { CardsPage } from '../cards/cardsPage'

export const Routing = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route index element={<PersonalInformation />} />
        <Route path={`${PATH.SIGNUP}`} element={<SignUp />} />
        <Route path={PATH.SIGNIN} element={<SignIn />} />
        <Route path={PATH.PersonalInformation} element={<PersonalInformation />} />
        <Route path={PATH.FORGOTPASSWORD} element={<ForgotPassword />} />
        <Route path={PATH.CheckEmail} element={<CheckEmail />} />
        <Route path={PATH.CreateNewPassword} element={<CreateNewPassword />} />
        <Route path={PATH.CardPacks} element={<CardPacksPage />} />
        <Route path={PATH.CardPage} element={<CardsPage />} />
        <Route
          path={PATH.Page404}
          element={<Typography variant={'h3'}>PAGE NOT FOUND :-(</Typography>}
        />
        <Route path={'*'} element={<Navigate to={PATH.Page404} />} />
      </Route>
    </Routes>
  )
}
