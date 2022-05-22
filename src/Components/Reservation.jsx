import React, { useContext } from 'react'
import Banner from './Banner'
import Hero from './Hero'
import ReserveDate from './ReserveDate'
import Title from './Title'

const Reservation = ({ reservedRoom }) => {
  return (
    <>
      <div className=''>
        <Hero hero='reservation'>
          <Banner
            title={`Book Your Desired Room `}
            subtitle={`you can book your room  for 1-15 days`}
          ></Banner>
        </Hero>
      </div>
      <div className='reserve-date'>
        <Title title='Reserve Your Room ' />
        <ReserveDate reservedRoom={reservedRoom} />
      </div>
    </>
  )
}

export default Reservation
