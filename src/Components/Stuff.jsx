import React from 'react'
import stuff from './../Fake-data/Stuff'
import './../App.css'
import Title from './Title'
import { FaPhone, FaUser } from 'react-icons/fa'
import Banner from './Banner'
import Hero from './Hero'

const Stuff = () => {
  return (
    <section className='service'>
      <Hero hero='defaultHero'>
        <Banner
          title='Our Stuff'
          subtitle='Feel Free To Contact With Our Stuff In Your Need'
        ></Banner>
      </Hero>
      <div className='services-center'>
        {stuff.map((item, indx) => {
          return (
            <article key={indx} className='services'>
              <h2>
                <FaUser />
              </h2>
              <h6>Name: {item.name}</h6>
              <p>Title: {item.title}</p>
              <p
                style={{
                  textAlign: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '3px',
                }}
              >
                <FaPhone color='green' size={22} />
                <a href='tel:' style={{ color: 'red', padding: '5px' }}>
                  {' '}
                  {item.contact}
                </a>
              </p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Stuff
