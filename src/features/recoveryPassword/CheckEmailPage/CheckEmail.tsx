import React from 'react'
import { Link } from 'react-router-dom'

export const CheckEmail = () => {
  return (
    <div>
      <h1>check email page</h1>
      <Link to={'/sign-in'}>
        <button>back to login</button>
      </Link>
    </div>
  )
}
