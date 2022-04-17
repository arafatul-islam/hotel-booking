import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../Components/Banner'
import Hero from '../Components/Hero'

const Home = (props) => {
  return (
    <Hero>
      <Banner title='Luxurious Rooms' subtitle='Delux Room Starts @ 1299 BDT'>
        <Link className='btn-primary' to='rooms'>
          Our Rooms
        </Link>
      </Banner>
    </Hero>
  )
}

export default Home
