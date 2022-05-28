import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import useAuth from '../hooks/useAuth'

const PrivateOutlet = ({ children }) => {
  const { user, emailVerified } = useAuth()

  if (emailVerified) {
    return <Outlet />
  } else {
    user ? <Navigate to='email-verification' /> : <Navigate to='login' />
  }
}

export default PrivateOutlet
