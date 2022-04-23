import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../Components/Hero'

const SingleRoom = (props) => {
  const { slug } = useParams()
  console.log(props)
  return (
    <div>
      single room
      <Outlet />
    </div>
  )
}

export default SingleRoom
