import React from 'react'
import { Outlet, useParams } from 'react-router-dom'

const SingleRoom = () => {
  return (
    <div>
      single room
      <Outlet />
    </div>
  )
}

export default SingleRoom
