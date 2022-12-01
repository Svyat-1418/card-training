import React from 'react'

import AppBar from '@mui/material/AppBar/AppBar'
import Toolbar from '@mui/material/Toolbar/Toolbar'
import Typography from '@mui/material/Typography'
import {NavLink} from 'react-router-dom'

import {HeaderAvatar} from './HeaderAvatar/HeaderAvatar'

import styles from 'common/components/Header/Header.module.scss'


import {PATH} from '../../common/enums/path'
import {useAppSelector} from '../../common/hooks'

export const Header = () => {
  const isLoggedIn = useAppSelector(getIsLoggedIn)

  return (
    <AppBar position="static" className={styles.main}>
      <Toolbar className={styles.toolbar}>
        <NavLink to={PATH.PACKS}>
          <Typography
        </NavLink>
        {!isLoggedIn && <HeaderAvatar/>}
      </Toolbar>
    </AppBar>
  )
}
