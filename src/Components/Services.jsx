import React, { useState } from 'react'
import Title from './Title'
import { FaUmbrellaBeach, FaCannabis, FaSwimmer, FaChild } from 'react-icons/fa'
const Services = () => {
  const services = [
    {
      icon: <FaUmbrellaBeach />,
      title: 'Beach View',
      info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, voluptatem.',
    },
    {
      icon: <FaCannabis />,
      title: 'Good Foods',
      info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, voluptatem.',
    },
    {
      icon: <FaSwimmer />,
      title: 'Swimming pool',
      info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, voluptatem.',
    },
    {
      icon: <FaChild />,
      title: 'Child Corner',
      info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, voluptatem.',
    },
  ]

  return (
    <section className='service'>
      <Title title='Services' />
      <div className='services-center'>
        {services.map((item, indx) => {
          return (
            <article key={indx} className='services'>
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
