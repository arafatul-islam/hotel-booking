import { hover } from '@testing-library/user-event/dist/hover'
import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-header'>
        <div style={{ padding: '5px' }}>
          <p>About Us</p>
          <p>
            <HashLink
              style={{
                color: 'white',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
              to='home#map'
            >
              Find us on Map
            </HashLink>
          </p>
          <p>
            <Link
              style={{
                color: 'white',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
              to='stuff'
            >
              Our Stuff
            </Link>
          </p>
        </div>

        <div>
          <p>Other Services</p>
          <p>
            <p>
              <Link
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
                to='food-service'
              >
                Food Service
              </Link>
            </p>
          </p>
        </div>
      </div>
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
