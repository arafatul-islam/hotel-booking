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
  console.log(user)
  return (
    <>
      {user ? (
        <div id='profile-form'>
          {user.photoURL ? (
            <img src={user.photoURL} alt={user.email} />
          ) : (
            <img
              src='https://images.unsplash.com/photo-1534294668821-28a3054f4256?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471'
              alt='unknown user'
              width='200px'
            />
          )}
          <p>
            <span style={{ fontWeight: '500' }}>Name:</span>{' '}
            {user.displayName ? user.displayName : 'Not found'}
          </p>
          <p>
            <span style={{ fontWeight: '500' }}>Email:</span>{' '}
            {user.email ? user.email : 'Not found'}
          </p>
          <p>
            <span style={{ fontWeight: '500' }}>Email Verified:</span>{' '}
            {user.emailVerified ? 'Email verified' : 'Not verified'}
          </p>
          <p>
            <span style={{ fontWeight: '500' }}>Phone:</span>{' '}
            {user.phone ? user.phone : 'Not found'}
          </p>

          <br />
          <p style={{ textAlign: 'center' }}>
            <Link to='/rooms' className='btn-primary'>
              Book Your Room
            </Link>
          </p>
        </div>
      ) : (
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
      )}
    </>
  )
}

export default Login
