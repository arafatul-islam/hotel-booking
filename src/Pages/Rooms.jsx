import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Banner from '../Components/Banner'
import Hero from '../Components/Hero'
import RoomsContainer from '../Components/RoomsContainer'
import SingleRoom from './SingleRoom'

const Rooms = (props) => {
  return (
    <div id='rooms'>
      {/* <Hero hero='roomsHero'>
        <Banner title='Our Rooms'>
          <Link className='btn-primary' to='/'>
            Return Home
          </Link>
        </Banner>
      </Hero> */}
      <Outlet />
      <RoomsContainer />
    </div>
  )
}

export default Rooms
