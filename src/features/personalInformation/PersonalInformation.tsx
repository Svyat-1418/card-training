import React, { useState } from 'react'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'

import LayersIcon from '@mui/icons-material/Layers'
import Logout from '@mui/icons-material/Logout'

import anonymousUserAva from './../../assets/images/user-anonymous-useravatar.jpg'

import { EditableText } from '../../common/components/EditableText'
import { useAppSelector } from '../../common/hooks'
import { Navigate } from 'react-router-dom'
import { Path } from '../../common/enums/Path'

export const PersonalInformation = () => {
  const [tempUserNameText, setTempUserNameText] = useState('User_Name')
  const [tempUserEmailText, setTempUserEmailText] = useState('useremail@gmail.com')

  const isLoggedIn = useAppSelector((state) => state.login.isLoggedIn)

  if (!isLoggedIn) {
    return <Navigate to={Path.SingIn} />
  }

  return (
    <Grid height={'100vh'} container justifyContent={'center'} alignItems={'center'}>
      <Grid item>
        <Paper variant={'outlined'}>
          <Card sx={{ maxWidth: 405 }}>
            <Box display={'flex'} justifyContent={'space-between'}>
              <IconButton>
                <LayersIcon />
                Pack List
              </IconButton>

              <IconButton>
                <Logout />
                Log Out
              </IconButton>
            </Box>

            <Typography margin={'.7rem'} variant={'h4'}>
              Personal Information
            </Typography>
            <CardMedia
              component="img"
              height="235"
              style={{ borderRadius: '50%', margin: '10 0' }}
              image={anonymousUserAva}
              alt="avatar"
            />

            <CardContent>
              <EditableText
                text={tempUserNameText}
                variant={'h5'}
                newTextCallback={(newText: string) => {
                  setTempUserNameText(newText)
                }}
              />

              <EditableText
                text={tempUserEmailText}
                variant={'body1'}
                newTextCallback={(newText: string) => {
                  setTempUserEmailText(newText)
                }}
              />
            </CardContent>
          </Card>
        </Paper>
      </Grid>
    </Grid>
  )
}
