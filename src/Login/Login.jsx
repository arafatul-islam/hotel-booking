import React, { useState } from 'react'
import { FaFacebook, FaFontAwesome, FaGoogle, FaTwitter } from 'react-icons/fa'
import initializeAuthentication from '../Backend/Firebase/firebase.initialize'
import './Login.css'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
} from 'firebase/auth'
import { Link } from 'react-router-dom'

const Login = () => {
  const [user, setUser] = useState({})
  console.log(user)
  // firebase oAuth
  initializeAuthentication()
  const googleProvider = new GoogleAuthProvider()
  const facebookProvider = new FacebookAuthProvider()
  const twitterProvider = new TwitterAuthProvider()

  const handleGoogleLogin = () => {
    const auth = getAuth()
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
  const handleFacebookLogin = () => {
    const auth = getAuth()
    signInWithPopup(auth, facebookProvider).then((result) => {
      const loggedInUser = result.user
      console.log(loggedInUser)
    })
  }
  const handleTwitterLogin = () => {
    const auth = getAuth()
    signInWithPopup(auth, twitterProvider).then((result) => {
      const loggedInUser = result.user
      console.log(loggedInUser)
    })
  }

  const FormHeader = (props) => <h2 id='headerTitle'>{props.title}</h2>

  const Form = (props) => (
    <div>
      <FormInput
        description='username'
        placeholder='Enter your username'
        type='text'
      />
      <FormInput
        description='Password'
        placeholder='Enter your password'
        type='password'
      />
      <FormButton title='Log in' />
    </div>
  )

  const FormButton = (props) => (
    <div id='button' className='row'>
      <button>{props.title}</button>
    </div>
  )

  const FormInput = (props) => (
    <div className='row'>
      <label>{props.description}</label>
      <input type={props.type} placeholder={props.placeholder} />
    </div>
  )

  const OtherMethods = (props) => (
    <div id='alternativeLogin'>
      <label>Or sign in with:</label>
      <div id='iconGroup'>
        {/* <Facebook />
        <Twitter /> */}
        <Google />
      </div>
    </div>
  )

  // const Facebook = (props) => (
  //   <a href='#' id='facebookIcon' onClick={handleFacebookLogin}>
  //     <FaFacebook />
  //   </a>
  // )

  // const Twitter = (props) => (
  //   <a href='#' id='twitterIcon' onClick={handleTwitterLogin}>
  //     <FaTwitter />
  //   </a>
  // )

  const Google = (props) => (
    <a href='#' id='googleIcon' onClick={handleGoogleLogin}>
      <FaGoogle size='35px' />
    </a>
  )

  return (
    <div id='loginform'>
      <FormHeader title='Login' />
      <Form />
      <h6 className='register'>
        Not Registered? Create an <Link to='/register'>account</Link>
      </h6>
      <OtherMethods />
    </div>
  )
}

export default Login
