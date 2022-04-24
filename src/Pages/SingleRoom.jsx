import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { RoomContext } from '../Context'
import Room from '../Components/Room'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import StyledHero from '../Components/StyledHero'
import defaultImg from '../images/room-1.jpeg'

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
    <>
      <StyledHero img={images[0] || defaultImg}>
        <Banner title={`${name} room`}>
          <Link to='/rooms' className='btn-primary'>
            Back to rooms
          </Link>
        </Banner>
      </StyledHero>
      <section className='single-room '>
        <div className='single-room-images'>
          {images.map((item, index) => {
            return <img src={item} key={index} alt={name} />
          })}
        </div>
        <div className='single-room-info'>
          <articel className='desc'>
            <h3>Details</h3>
            <p>{description}</p>
          </articel>
          <article className='info'>
            <h3>info</h3>
            <h6>Price : &#2547;{price}</h6>
            <h6>Size : {size} sqft </h6>
            <h6>
              Max Capacity:{' '}
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6>Pets: {pets ? 'pets allowed' : 'no pets allowed'}</h6>
            <h6>{breakfast && 'Free breakfast '}</h6>
          </article>
          <section className='extras'>
            <h3>Extras</h3>
            {extras.map((item, index) => {
              return <li key={index}>-{item}</li>
            })}
          </section>
        </div>
      </section>
    </>
  )
}

export default SingleRoom
