import { Button, Toolbar, AppBar } from '@mui/material'
import { logoutTC } from '../signIn/signIn-slice'
import { Navigate } from 'react-router-dom'
import React from 'react'
import { useAppDispatch } from '../../common/hooks'
import { useSelector } from 'react-redux'
import { RootStateType } from '../../app/store'

export const AppBarComponent = () => {
  const dispatch = useAppDispatch()
  const isLoggedIn = useSelector<RootStateType, boolean>((state) => state.login.isLoggedIn)

  return (
    <AppBar>
      <Toolbar>
        {isLoggedIn ? (
          <Button variant={'contained'} onClick={() => dispatch(logoutTC())}>
            Log out
          </Button>
        ) : (
          <Button variant={'contained'} onClick={() => <Navigate to={'/sign-in'} />}>
            Sign in
          </Button>
        )}
      </Toolbar>
    </AppBar>
  )
}
