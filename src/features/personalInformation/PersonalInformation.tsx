import React from 'react'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'

import { EditableText } from '../../common/components/EditableText'
import { useAppDispatch, useAppSelector } from '../../common/hooks'
import { Navigate, NavLink } from 'react-router-dom'
import { PATH } from '../../common/enums/path'
import { ArrowBack } from '@mui/icons-material'
import Avatar from '@mui/material/Avatar'
import { Stack } from '@mui/material'
import { updateUserData } from '../../app/appSlice'

export const PersonalInformation = () => {
  const dispatch = useAppDispatch()

  const isLoggedIn = useAppSelector((state) => state.login.isLoggedIn)
  const publicCardPacksCount = useAppSelector((state) => state.app.userData.publicCardPacksCount)
  const userAvatar = useAppSelector((state) => state.app.userData.avatar)
  const userName = useAppSelector((state) => state.app.userData.name)

  if (!isLoggedIn) {
    return <Navigate to={PATH.SIGNIN} />
  }

  return (
    <Box>
      <Grid height={'100vh'} container justifyContent={'center'} alignItems={'center'}>
        <Paper variant={'outlined'}>
          <Card sx={{ maxWidth: 800 }}>
            <Typography margin={'1rem'} variant={'h4'} fontWeight={'normal'}>
              Personal Information
            </Typography>

            <Stack direction="column" justifyContent="space-around" alignItems="center" spacing={3}>
              <Avatar src={userAvatar} sx={{ width: 150, height: 150 }}></Avatar>

              <CardContent>
                <EditableText
                  text={userName}
                  variant={'h5'}
                  newTextCallback={(newText: string) => {
                    dispatch(updateUserData({ name: newText }))
                  }}
                />

                <Typography>Count public packs: {publicCardPacksCount}</Typography>

                <NavLink to={PATH.CardPacks}>
                  <IconButton>
                    <ArrowBack />
                    Back to Pack List
                  </IconButton>
                </NavLink>
              </CardContent>
            </Stack>
          </Card>
        </Paper>
      </Grid>
    </Box>
  )
}
