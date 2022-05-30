import { hover } from '@testing-library/user-event/dist/hover'
import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-center'>
        <p style={{ textAlign: 'center', marginTop: '15px' }}>
          © Copyright Rafi {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}

export default Footer

//
