import React from 'react'
import { useParams } from 'react-router-dom'
import useFirebase from '../hooks/useFirebase'
import Banner from './Banner'
import Hero from './Hero'

const Reservation = () => {
  const { room } = useFirebase()
  return (
    <Hero>
      <Banner
        title='Book your desired room'
        subtitle={`your room is `}
      ></Banner>
    </Hero>
  )
}

export default Reservation
