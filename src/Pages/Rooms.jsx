import React from 'react'
import { Outlet } from 'react-router-dom'
import Hero from '../Components/Hero'

const Rooms = (props) => {
  return (
    <div>
      <Hero hero='roomsHero'></Hero>
      <Outlet />
    </div>
  )
}

export default Rooms
