import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { RoomContext } from '../Context'
import Room from '../Components/Room'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'

const SingleRoom = (props) => {
  const { slug } = useParams()
  const { getRoom } = useContext(RoomContext)
  const room = getRoom(slug)
  console.log(room)
  if (!room) {
    return (
      <div className='error'>
        <h3>No such room found!</h3>
        <Link to='room' className='btn-primary '>
          Back to rooms
        </Link>
      </div>
    )
  }
  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = room
  return (
    <Hero hero='roomsHero'>
      <Banner title={`${name} room`}>
        <Link to='/rooms' className='btn-primary'>
          Back to rooms
        </Link>
      </Banner>
    </Hero>
  )
}

export default SingleRoom
