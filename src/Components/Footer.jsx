import { hover } from '@testing-library/user-event/dist/hover'
import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-header'>
        <div style={{ border: '1px solid white' }}>
          <p>About Us</p>
          <p>
            <HashLink
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
              to='home#map'
            >
              Find us on Map
            </HashLink>
          </p>
        </div>
        <p>About</p>
        <p>About</p>
        <p>About</p>
      </div>
      <div className='footer-center'></div>
    </footer>
  )
}

export default Footer

//  © Copyright Rafi {new Date().getFullYear()}
