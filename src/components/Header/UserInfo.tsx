import React from 'react'

import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import anonymousUserAva from '../../assets/images/userAnonymousAvatar.jpg'
import { useAppSelector } from '../../common/hooks'

export const UserInfo = () => {
  const userAvatar = useAppSelector((state) => state.app.userData.avatar)
  const userName = useAppSelector((state) => state.app.userData.name)

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography variant={'h5'} sx={{ minWidth: 100 }}>
        {userName}
      </Typography>
      <Avatar src={userAvatar || anonymousUserAva} sx={{ width: 32, height: 32 }} />
    </Box>
  )
}
