import React, { useState } from 'react'
import { FaFacebook, FaFontAwesome, FaGoogle, FaTwitter } from 'react-icons/fa'
import initializeAuthentication from '../Backend/Firebase/firebase.initialize'
import './Login.css'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from 'firebase/auth'
import { Link } from 'react-router-dom'
import useFirebase from '../hooks/useFirebase'

const Register = () => {
  const {
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
    handleRegister,
    errorMsg,
    setErrorMsg,
    handleNameChange,
  } = useFirebase()

  return (
    <div id='loginform'>
      <h2 id='headerTitle'> Register </h2>
      <form onSubmit={handleRegister}>
        <div className='row'>
          <label>Name</label>
          <input
            type='name'
            placeholder='Enter your name'
            onBlur={handleNameChange}
            required
          />
        </div>
        <div className='row'>
          <label>Email</label>
          <input
            type='email'
            placeholder='Enter your email'
            onBlur={handleEmail}
            required
          />
        </div>
        <div className='row'>
          <label>Password</label>
          <input
            type='password'
            placeholder='Enter your password'
            onBlur={handlePassword}
            required
          />
        </div>

        <div id='button' className='row'>
          <button> Register</button>
          <p className='register'>
            Already registered? <Link to='/login'>Log-in </Link>{' '}
          </p>
        </div>

        <p className='error-msg'>{errorMsg}</p>
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
