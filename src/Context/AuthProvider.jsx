import React, { createContext } from 'react'
import useFirebase from '../hooks/useFirebase'

export const AuthContext = createContext()
const AuthProvider = (props) => {
  const allFirebaseAuth = useFirebase()
  const { children } = props
  return (
    <AuthContext.Provider value={allFirebaseAuth}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
