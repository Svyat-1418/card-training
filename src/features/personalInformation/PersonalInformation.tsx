import React from 'react'

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
import CreateIcon from '@mui/icons-material/Create'

import anonymousUserAva from './../../assets/images/user-anonymous-useravatar.jpg'

export const PersonalInformation = () => {
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
              <Typography gutterBottom variant="h5" component="div">
                User Name
                <IconButton>
                  <CreateIcon />
                </IconButton>
              </Typography>

              <Typography variant="body1" color="text.secondary">
                useremail@gmail.com
                <IconButton>
                  <CreateIcon />
                </IconButton>
              </Typography>
            </CardContent>
          </Card>
        </Paper>
      </Grid>
    </Grid>
  )
}
