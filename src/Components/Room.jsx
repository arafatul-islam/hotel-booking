import React from 'react'
import { Link, useParams } from 'react-router-dom'
import defaultImg from '../images/room-1.jpeg'
import PropTypes from 'prop-types'

const Room = (props) => {
  const { name, slug, images, price } = props.room

  const url = props.text ? `rooms/${slug}` : `${slug}`

  return (
    <article className='room'>
      <div className='img-container'>
        <img src={images[0] || defaultImg} alt='single-room' />
        <div className='price-top'>
          <h6>&#2547;{price}</h6>
          <p>per night</p>
        </div>
        <Link to={url} className='btn-primary room-link'>
          Features
        </Link>
      </div>
      <p className='room-info'>{name}</p>
    </article>
  )
}

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
}

export default Room
