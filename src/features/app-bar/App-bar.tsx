import { Button, Toolbar, AppBar, MenuItem, Menu } from '@mui/material'
import { logoutTC } from '../signIn/signIn-slice'
import { Navigate } from 'react-router-dom'
import React, { useState } from 'react'
import { useAppDispatch } from '../../common/hooks'
import { useSelector } from 'react-redux'
import { RootStateType } from '../../app/store'
import anonymousUserAva from './../../assets/images/user-anonymous-useravatar.jpg'
import LogoutIcon from '@mui/icons-material/Logout'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import style from './app-bar.module.css'

export const AppBarComponent = () => {
  const dispatch = useAppDispatch()
  const isLoggedIn = useSelector<RootStateType, boolean>((state) => state.login.isLoggedIn)

  const [userMenu, setUserMenu] = useState<boolean>(false)

  const onAvatarClick = () => {
    setUserMenu(!userMenu)
  }
  const onLogoutClick = () => {
    setUserMenu(!userMenu)
    dispatch(logoutTC())
  }
  const onProfileClick = () => {
    setUserMenu(!userMenu)
    return <Navigate to={'/personal-information'} />
  }

  return (
    <AppBar>
      <Toolbar className={style.toolbar}>
        {isLoggedIn ? (
          <Button variant={'contained'} onClick={() => dispatch(logoutTC())}>
            Log out
          </Button>
        ) : (
          <Button variant={'contained'} onClick={() => <Navigate to={'/sign-in'} />}>
            Sign in
          </Button>
        )}
        <div>
          {isLoggedIn ? (
            <div className={style.userInfoBlock}>
              <span>user Name</span>
              <div className={style.imgBlock} onClick={onAvatarClick}>
                <img style={{ borderRadius: '18px' }} src={anonymousUserAva} />
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </Toolbar>
      {userMenu && (
        <Menu // user menu settings
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(userMenu)}
          onClose={onAvatarClick}
        >
          <MenuItem onClick={onProfileClick}>
            <span>
              {' '}
              <AccountCircleIcon fontSize={'small'} style={{ paddingRight: '5px' }} />
              profile
            </span>
          </MenuItem>
          <MenuItem onClick={onLogoutClick}>
            <span>
              <LogoutIcon fontSize={'small'} style={{ paddingRight: '5px' }} />
              logOut
            </span>
          </MenuItem>
        </Menu>
      )}
    </AppBar>
  )
}
