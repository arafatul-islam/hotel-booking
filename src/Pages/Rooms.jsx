import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Banner from '../Components/Banner'
import Hero from '../Components/Hero'

const Rooms = (props) => {
  return (
    <div>
      <Hero hero='roomsHero'>
        <Banner title='Our Rooms'>
          <Link className='btn-primary' to='/'>
            Return Home
          </Link>
        </Banner>
      </Hero>
      <Outlet />
    </div>
  )
}

export default Rooms
