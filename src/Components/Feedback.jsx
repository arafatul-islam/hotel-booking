import React, { useEffect, useState } from 'react'
import StarRating from '../Components/StarRating'
import useAuth from '../hooks/useAuth'
import useHook from '../hooks/useHook'
import { db } from '../Backend/Firebase/firebase.initialize'
import { collection, getDocs } from 'firebase/firestore'
import { async } from '@firebase/util'
import { exportSlug } from '../Pages/SingleRoom'
import Title from './Title'

const Feedback = () => {
  const [dbStars, setDbStars] = useState([])
  const [averageRatings, setAverageRatings] = useState(0)
  const [dbReview, setDbReview] = useState([])
  const { handleFeedback, handleFeedbackText } = useHook()
  const {
    emailVerified,
    nameDB,
    setNameDB,
    ratingDB,
    setRatingDB,
    reviewDB,
    setReviewDB,
    disableReview,
    setDisableReview,
  } = useAuth()

  // db reference for star rating and review
  const dbSlugRef = collection(db, `${exportSlug}`)

  let sum = 0

  useEffect(() => {
    //getting star rating from db
    const getSlugs = async () => {
      const starsAndReviews = await getDocs(dbSlugRef)
      setDbReview(
        starsAndReviews.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      )
    }
    const allRating = dbReview.reduce((prev, curr) => {
      return prev + parseInt(curr.rating)
    }, 0)

    const avg = allRating / parseInt(dbReview.length)

    // setAverageRatings(avg)

    // console.log(avg)
    // console.log(averageRatings)

    getSlugs()
  }, [setDbReview])

  if (!emailVerified) {
    return (
      <>
        <Title title={`Users Ratings:`}></Title>
        {dbReview.map((user) => (
          <section id='user-review'>
            <div className='btn-review'>
              <h4> Name: {user.name}</h4>
              <h4 style={{ display: 'flex' }}>
                Ratings:{' '}
                {user.rating && <StarRating averageRatings={user.rating} />}
              </h4>
              <h4>Review : {user.review_msg}</h4>
            </div>
          </section>
        ))}
      </>
    )
  }
  return (
    <div className='feedback'>
      {!disableReview ? (
        <>
          <StarRating averageRatings={5} />
          <form onSubmit={handleFeedback}>
            <div>
              <textarea
                placeholder='we love to hear your feedback'
                onBlur={handleFeedbackText}
              ></textarea>
            </div>
            <button className='btn-book'>submit</button>
          </form>
        </>
      ) : (
        <>
          <Title title={`thank you for your review`} />
        </>
      )}
    </div>
  )
}

export default Feedback
