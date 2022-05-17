import React, { useState } from 'react'
import { FaFacebook, FaFontAwesome, FaGoogle, FaTwitter } from 'react-icons/fa'
import initializeAuthentication from '../Backend/Firebase/firebase.initialize'
import './Login.css'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from 'firebase/auth'
import { Link } from 'react-router-dom'

const Register = () => {
  const [userInfo, setUserInfo] = useState({})
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  // firebase oAuth
  initializeAuthentication()
  const googleProvider = new GoogleAuthProvider()
  const auth = getAuth()

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      const { displayName, email, photoURL } = result.user
      const loggedInUser = {
        name: displayName,
        email: email,
        photo: photoURL,
      }
      setUserInfo(loggedInUser)
      console.log(userInfo)
    })
  }

  const handleRegister = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        const user = result.user
        setUserInfo(user)
      })
      .catch((error) => {
        const errorCode = error.code
        setErrorMsg(error.message)
      })

    setEmail('')
    setPassword('')
  }
  console.log(userInfo)

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  return (
    <div id='loginform'>
      <h2 id='headerTitle'> Register </h2>
      <form onSubmit={handleRegister}>
        <div className='row'>
          <label>Email</label>
          <input
            type='email'
            placeholder='Enter your email'
            onBlur={handleEmailChange}
            required
          />
        </div>
        <div className='row'>
          <label>Password</label>
          <input
            type='password'
            placeholder='Enter your password'
            onBlur={handlePasswordChange}
            required
          />
        </div>

        <div id='button' className='row'>
          <button> Register</button>
        </div>
        <p>{errorMsg}</p>
        <div id='alternativeLogin'>
          <label>Or sign up with:</label>
          <div id='iconGroup'>
            <a href='#' id='googleIcon' onClick={handleGoogleLogin}>
              <FaGoogle size='35px' />
            </a>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Register
