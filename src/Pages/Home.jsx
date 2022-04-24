import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../Components/Banner'
import FeaturedRooms from '../Components/FeaturedRooms'
import Hero from '../Components/Hero'
import Services from '../Components/Services'
import StyledHero from '../Components/StyledHero'

const Home = (props) => {
  return (
    <>
      <Hero>
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
      <FeaturedRooms></FeaturedRooms>
    </>
  )
}

export default Home
