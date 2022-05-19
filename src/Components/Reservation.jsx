import React from 'react'
import { useParams } from 'react-router-dom'
import useFirebase from '../hooks/useFirebase'
import Banner from './Banner'
import Hero from './Hero'
import ReserveDate from './ReserveDate'
import Title from './Title'

const Reservation = () => {
  const { room } = useFirebase()
  return (
    <>
      <div className=''>
        <Hero hero='reservation'>
          <Banner
            title='Book Your Desired Room'
            subtitle='Pick Your Date'
          ></Banner>
        </Hero>
      </div>
      <div className='reserve-date'>
        <Title title='Reserve Your Room ' />
        <ReserveDate />
      </div>
    </>
  )
}

export default Reservation
