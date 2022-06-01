import React, { useEffect, useState } from 'react'
import StarRating from '../Components/StarRating'
import useAuth from '../hooks/useAuth'
import useHook from '../hooks/useHook'
import { db } from '../Backend/Firebase/firebase.initialize'
import { collection, getDocs } from 'firebase/firestore'
import { async } from '@firebase/util'

const Feedback = () => {
  const [dbStars, setDbStars] = useState([])
  const [averageRatings, setAverageRatings] = useState(0)
  const { handleFeedback, handleFeedbackText } = useHook()
  const { emailVerified } = useAuth()

  const dbStarsRef = collection(db, 'starRatingSystem')

  let sum = 0

  useEffect(() => {
    const getStars = async () => {
      const starsFromDB = await getDocs(dbStarsRef)

      setAverageRatings(
        Math.ceil(
          starsFromDB.docs
            .map((item) => ({ ...item.data() }))
            .reduce((p, c) => {
              return p + c.stars
            }, 0) / starsFromDB.docs.length
        )
      )

      console.log(averageRatings)
    }

    getStars()
  }, [setDbStars])

  if (!emailVerified) {
    return (
      <div className='feedback'>
        <form onSubmit={handleFeedback} disabled>
          <StarRating averageRatings={averageRatings} />
          <div>
            <textarea
              placeholder='Only verified user can review'
              onChange={handleFeedbackText}
              disabled
            ></textarea>
          </div>
          <button disabled>submit</button>
        </form>
      </div>
    )
  }
  return (
    <div className='feedback'>
      <StarRating averageRatings={5} />
      <form onSubmit={handleFeedback}>
        <div>
          <textarea
            placeholder='we love to hear your feedback'
            onChange={handleFeedbackText}
          ></textarea>
        </div>
        <button className='btn-book'>submit</button>
      </form>
    </div>
  )
}

export default Feedback
