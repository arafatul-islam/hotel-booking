import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import useHook from '../hooks/useHook'

const StarRating = (props) => {
  const { rating, setRating, hover, setHover } = useHook()

  return (
    <div>
      <h6>Customer Ratings:</h6>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1
        return (
          <label key={i}>
            {' '}
            <input type='radio' name='rating' value={ratingValue} />
            <FaStar
              className='star'
              size={35}
              onClick={() => setRating(ratingValue)}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              color={ratingValue <= (hover || rating) ? '#ffc107' : '#E4E5E9'}
            />
          </label>
        )
      })}
    </div>
  )
}

export default StarRating
