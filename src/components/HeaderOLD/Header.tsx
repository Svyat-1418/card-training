import React from 'react'

import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import LinearProgress from '@mui/material/LinearProgress'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import style from './Header.module.css'
import { UserInfo } from './UserInfo'
import { AccountSettings } from './AccountSettings'
import { useAppSelector } from '../../common/hooks'

export const Header = () => {
  const status = useAppSelector((state) => state.app.status)

  return (
    <>
      <AppBar>
        <Container>
          <Toolbar className={style.toolbar}>
            <UserInfo />

            <Typography variant={'h4'}>Card Training</Typography>

            <AccountSettings />
          </Toolbar>
        </Container>
        {status === 'loading' && <LinearProgress color={'success'} />}
      </AppBar>
    </>
  )
}
