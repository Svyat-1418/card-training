import React, { useEffect } from 'react'
import './App.css'
import { Routing } from '../features/routing/Routing'
import { useAppDispatch } from '../common/hooks'
import { initializeApp } from './appSlice'
import { CircularProgress } from '@mui/material'
import Box from '@mui/material/Box'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initializeApp())
  }, [])

  if (!initializeApp) {
    return (
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CircularProgress color={'primary'} size={80} thickness={3.6} />
      </Box>
    )
  }

  return (
    <div className="App">
      <Routing />
    </div>
  )
}

export default App
