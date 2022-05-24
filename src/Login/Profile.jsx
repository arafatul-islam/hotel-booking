import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const Profile = () => {
  const { user } = useAuth()
  return (
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
        <span style={{ color: 'tomato' }}>
          {user.phone ? user.phone : 'Not found'}
        </span>
      </p>

      <br />
      <p>
        <Link to='/rooms' className='btn-primary'>
          Book Your Room
        </Link>
      </p>
    </div>
  )
}

export default Profile
