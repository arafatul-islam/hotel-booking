import React from 'react'
import { Outlet } from 'react-router-dom'

const Rooms = (props) => {
  return (
    <div>
      Hello from Rooms
      <Outlet />
    </div>
  )
}

export default Rooms
