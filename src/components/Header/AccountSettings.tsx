import React, { useState } from 'react'

import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'

import PersonAdd from '@mui/icons-material/PersonAdd'
import Logout from '@mui/icons-material/Logout'
import Layers from '@mui/icons-material/Layers'
import ManageAccounts from '@mui/icons-material/ManageAccounts'
import Password from '@mui/icons-material/Password'

import { NavLink } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../common/hooks'
import { Path } from '../../common/enums/Path'
import { logoutTC } from '../../features/signIn/signIn-slice'

export const AccountSettings = () => {
  const dispatch = useAppDispatch()

  const userAvatar = useAppSelector((state) => state.app.userData.avatar)

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClickLogout = () => {
    dispatch(logoutTC())
  }

  const handleClickAccountSettings = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
      <Tooltip title="Account settings">
        <IconButton
          style={{ color: 'white' }}
          onClick={handleClickAccountSettings}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Typography mr={2} variant={'h5'}>
            Account settings{' '}
          </Typography>
          <ManageAccounts />
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <NavLink to={Path.PersonalInformation}>
            <ListItemIcon>
              <Avatar src={userAvatar} />
            </ListItemIcon>
            Personal information
          </NavLink>
        </MenuItem>

        <MenuItem>
          <NavLink to={Path.CardPacks}>
            <ListItemIcon>
              <Layers />
            </ListItemIcon>
            Pack list
          </NavLink>
        </MenuItem>
        <Divider />

        <MenuItem>
          <NavLink to={Path.SingUp}>
            <ListItemIcon>
              <PersonAdd fontSize="small" />
            </ListItemIcon>
            Create another account
          </NavLink>
        </MenuItem>

        <MenuItem>
          <NavLink to={Path.ForgotPassword}>
            <ListItemIcon>
              <Password fontSize="small" />
            </ListItemIcon>
            Change password
          </NavLink>
        </MenuItem>

        <MenuItem onClick={handleClickLogout}>
          <IconButton>
            <Logout fontSize="small" />
          </IconButton>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  )
}
