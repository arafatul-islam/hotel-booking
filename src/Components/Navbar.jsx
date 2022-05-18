import React, { useState } from 'react'
import logo from '../images/logo.svg'
import { FaAlignRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import useFirebase from '../hooks/useFirebase'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleToggle = () => {
    setIsOpen(!isOpen)
  }
  const { user, logOut } = useFirebase()

  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <img src={logo} alt='resort logo' />
          </Link>
          <button type='button' className='nav-btn' onClick={handleToggle}>
            <FaAlignRight className='nav-icon'></FaAlignRight>
          </button>
        </div>
        <ul className={isOpen ? 'nav-links show-nav' : 'nav-links'}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='rooms'>Rooms</Link>
          </li>
          {!user ? (
            <li>
              {' '}
              <Link to='/login'>Login</Link>
            </li>
          ) : (
            <li>
              <Link to=''>{user.displayName}</Link>
            </li>
          )}
          {user ? (
            <li>
              {console.log(user)}
              <Link to=''>
                <button onClick={logOut} className='btn-primary'>
                  log out
                </button>
              </Link>
            </li>
          ) : (
            ''
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
