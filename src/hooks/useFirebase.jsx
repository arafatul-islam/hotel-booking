import { useEffect, useState } from 'react'
import initializeAuthentication from '../Backend/Firebase/firebase.initialize'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth'

initializeAuthentication()
const useFirebase = () => {
  const [user, setUser] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [toggle, setToggle] = useState(false)
  const [error, setError] = useState('')

  // firebase oAuth

  const googleProvider = new GoogleAuthProvider()
  const auth = getAuth()

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser)
        console.log(currentUser)
      }
    })
  }, [])

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider).then((result) => {})
  }

  const handleEmailLogin = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        const user = result.user

        console.log(user)
      })
      .catch((error) => {
        setError(error.message)
      })
  }

  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        // ..
      })
  }

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null)
        console.log(user)
      })
      .catch((error) => {})
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  return {
    user,
    setUser,
    error,
    setError,
    email,
    setEmail,
    password,
    setPassword,
    toggle,
    setToggle,
    handleGoogleLogin,
    handleEmailLogin,
    handleResetPassword,
    handleEmail,
    handlePassword,
    logOut,
  }
}

export default useFirebase
