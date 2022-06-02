import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import useAuth from '../hooks/useAuth'
import useHook from '../hooks/useHook'

const StarRating = ({ averageRatings }) => {
  const { hover, setHover } = useHook()
  const { emailVerified, rating, setRating } = useAuth()

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      {[...Array(averageRatings)].map((star, i) => {
        const ratingValue = i + 1
        return (
          <label key={i}>
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
              <FaStar className='star' size={20} color='#ffc107' />
            )}
          </label>
        )
      })}
    </div>
  )
}

export default StarRating
