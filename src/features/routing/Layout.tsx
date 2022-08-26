import React from 'react'
import { Outlet } from 'react-router-dom'
import { AppBarComponent } from '../app-bar/App-bar'

export const Layout = () => {
  return (
    <>
      <AppBarComponent />
      <Outlet />
    </>
  )
}
