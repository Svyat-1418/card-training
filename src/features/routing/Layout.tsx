import React from 'react'

import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import { ErrorSnackbar } from '../../common/components/ErrorSnackbar'

export const Layout = () => {
  return (
    <>
      <Header />
      <ErrorSnackbar />
      <Outlet />
    </>
  )
}
