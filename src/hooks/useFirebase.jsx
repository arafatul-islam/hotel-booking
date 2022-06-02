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
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from 'firebase/auth'

initializeAuthentication()
const useFirebase = () => {
  const [name, setName] = useState('')
  const [user, setUser] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [toggle, setToggle] = useState(false)
  const [error, setError] = useState('')
  const [emailVerified, setEmailVerified] = useState(null)
  const [roomId, setRoomId] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [nameDB, setNameDB] = useState('')
  const [ratingDB, setRatingDB] = useState(0)
  const [reviewDB, setReviewDB] = useState('')
  const [rating, setRating] = useState(0)
  const [disableReview, setDisableReview] = useState(false)
  // firebase oAuth

  const googleProvider = new GoogleAuthProvider()
  const auth = getAuth()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid
        setEmailVerified(user.emailVerified)
        setUser(user)
      }
    })
  }, [])

  const handleRegister = (e) => {
    e.preventDefault()
    if (password.length < 6) {
      setErrorMsg('password should be at least 6 characters')
      return
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          // Signed in
          const user = result.user
          handleEmailVerification()
          updateUserProfile()
          console.log(user)
        })
        .catch((error) => {
          const errorCode = error.code
          setErrorMsg(error.message)
        })
      setErrorMsg('Registration completed')
      setEmail('')
      setPassword('')
    }
  }
  const handleEmailVerification = () => {
    sendEmailVerification(auth.currentUser).then((result) => {
      setErrorMsg('Email verification link sent')
    })
  }
  const updateUserProfile = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
      })
  }

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider).then((result) => {})
  }

  const handleEmailLogin = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        const user = result.user
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
        // console.log(user)
      })
      .catch((error) => {})
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  return {
    user,
    setUser,
    emailVerified,
    setEmailVerified,
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
    handleRegister,
    errorMsg,
    setErrorMsg,
    handleNameChange,
    roomId,
    setRoomId,
    nameDB,
    setNameDB,
    ratingDB,
    setRatingDB,
    reviewDB,
    setReviewDB,
    rating,
    setRating,
    disableReview,
    setDisableReview,
  }
}

export default useFirebase
