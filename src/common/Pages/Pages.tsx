import { Route, Routes } from 'react-router-dom'
import { Path } from '../enums/Path'
import { SignIn } from '../../features/signIn/SignIn'
import { Navigate } from 'react-router-dom'
import { SignUp } from '../../features/signUp/SignUp'

export const Pages = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Navigate to={Path.SingIn} />} />
      <Route path={Path.SingIn} element={<SignIn />} />
      <Route path={Path.SingUp} element={<SignUp />} />
    </Routes>
  )
}
