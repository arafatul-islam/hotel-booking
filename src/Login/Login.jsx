import React, { useState } from 'react'
import { FaFacebook, FaFontAwesome, FaGoogle, FaTwitter } from 'react-icons/fa'
import initializeAuthentication from '../Backend/Firebase/firebase.initialize'
import './Login.css'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from 'firebase/auth'
import { Link } from 'react-router-dom'

const Login = () => {
  const [user, setUser] = useState({})
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [toggle, setToggle] = useState(false)
  console.log(user)
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
      setUser(loggedInUser)
    })
  }

  const handleEmailLogin = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      // Signed in
      const user = userCredential.user
      console.log(user)
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

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  return (
    <div id='loginform'>
      <h2 id='headerTitle'>Login</h2>
      <form onSubmit={handleEmailLogin}>
        <div className='row'>
          <label>Email</label>
          <input
            type='email'
            placeholder='Enter your email'
            onBlur={handleEmail}
          />
        </div>
        {!toggle ? (
          <div className='row'>
            <label>Password</label>
            <input
              type='password'
              placeholder='Enter your password'
              onBlur={handlePassword}
            />
          </div>
        ) : (
          ''
        )}
        <div id='button' className='row'>
          {!toggle ? <button>Log-in</button> : ''}
          <p className='error-msg' onClick={() => setToggle(!toggle)}>
            {!toggle ? 'forgot password?' : 'log-in'}
          </p>
          {toggle ? (
            <button onClick={handleResetPassword}>Reset password</button>
          ) : (
            ''
          )}

          <p>
            Not registered? Create an <Link to='/register'>account</Link>
          </p>
        </div>
        <div id='alternativeLogin'>
          <label>Or sign in with:</label>
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

export default Login
