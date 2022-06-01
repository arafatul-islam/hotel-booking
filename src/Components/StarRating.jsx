import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import useAuth from '../hooks/useAuth'
import useHook from '../hooks/useHook'

const StarRating = ({ averageRatings }) => {
  const { rating, setRating, hover, setHover } = useHook()
  const { emailVerified } = useAuth()

  // stars from database

  return (
    <div>
      <h6>Customer Ratings: {averageRatings} stars</h6>
      {[...Array(averageRatings)].map((star, i) => {
        const ratingValue = i + 1
        return (
          <label key={i}>
            {' '}
            <input type='radio' name='rating' value={ratingValue} />
            {emailVerified ? (
              <FaStar
                className='star'
                size={35}
                onClick={() => setRating(ratingValue)}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
                color={ratingValue <= (hover || rating) ? '#ffc107' : '#E4E5E9'}
              />
            ) : (
              <FaStar className='star' size={35} color='#ffc107' />
            )}
          </label>
        )
      })}
    </div>
  )
}

export default StarRating
