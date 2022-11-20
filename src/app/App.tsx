import { useEffect } from 'react'

import styles from './App.module.scss'

import { initializeApp } from './appSlice'

import { useAppDispatch, useAppSelector } from '../common/hooks'

import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

import { Routing } from '../features/routing/Routing'

function App() {
  const dispatch = useAppDispatch()

  const isInitialized = useAppSelector((state) => state.app.isInitialized)

  useEffect(() => {
    dispatch(initializeApp())
  }, [])

  if (!isInitialized) {
    return (
      <Box className={styles.initialized}>
        <CircularProgress />
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
