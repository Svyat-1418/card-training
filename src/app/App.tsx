import React, { useEffect } from 'react'
import './App.css'
import { Routing } from '../features/routing/Routing'
import { useAppDispatch, useAppSelector } from '../common/hooks'
import { initializeApp } from './appSlice'
import { CircularProgress } from '@mui/material'
import Box from '@mui/material/Box'

function App() {
  const dispatch = useAppDispatch()

  const isInitialized = useAppSelector((state) => state.app.isInitialized)

  useEffect(() => {
    dispatch(initializeApp())
  }, [])

  if (!isInitialized) {
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
        <CircularProgress color={'primary'} size={100} thickness={3.6} />
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
