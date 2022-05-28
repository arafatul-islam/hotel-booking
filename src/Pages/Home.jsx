import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../Components/Banner'
import '../App.css'
import Hero from '../Components/Hero'
import Services from '../Components/Services'
import Map from '../Components/Map'

const Home = (props) => {
  return (
    <>
      <Hero hero='travelHero'>
        <Banner
          title='Luxurious Rooms'
          subtitle='Delux Room Starts @ &#2547;4000'
        >
          <Link className='btn-primary' to='rooms'>
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <Map />
    </>
  )
}

export default Home
