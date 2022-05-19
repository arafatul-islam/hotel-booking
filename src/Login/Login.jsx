import React, { useState } from 'react'
import { FaFacebook, FaFontAwesome, FaGoogle, FaTwitter } from 'react-icons/fa'
import initializeAuthentication from '../Backend/Firebase/firebase.initialize'
import './Login.css'

import { Link } from 'react-router-dom'
import useFirebase from '../hooks/useFirebase'

const Login = () => {
  const {
    user,
    error,
    email,
    password,
    toggle,
    setToggle,
    handleGoogleLogin,
    handleEmailLogin,
    handleResetPassword,
    handleEmail,
    handlePassword,
  } = useFirebase()

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
          {error && <p className='error-msg'> {error}</p>}
          {!toggle ? <button>Log-in</button> : ''}
          <p className='error-msg' onClick={() => setToggle(!toggle)}>
            {!toggle ? 'forgot password?' : ''}
          </p>
          {toggle ? (
            <button onClick={handleResetPassword}>Reset password</button>
          ) : (
            ''
          )}

          {!toggle ? (
            <p>
              `Not registered? Create an <Link to='/register'>account</Link>
            </p>
          ) : (
            ''
          )}
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
