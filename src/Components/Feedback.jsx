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
    user,
    emailVerified,
    nameDB,
    setNameDB,
    ratingDB,
    setRatingDB,
    reviewDB,
    setReviewDB,
    disableReview,
    setDisableReview,
    dbReviewToggler,
    setDbReviewToggler,
  } = useAuth()

  // db reference for star rating and review
  const dbSlugRef = collection(db, `${exportSlug}`)
  const reviewToggleRef = collection(db, `${user?.email}review`)

  let sum = 0

  useEffect(() => {
    //getting star rating from db
    const getSlugs = async () => {
      const starsAndReviews = await getDocs(dbSlugRef)
      setDbReview(
        starsAndReviews.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      )
    }
    getSlugs()
  }, [setDbReview])

  useEffect(() => {
    const getReviewToggle = async () => {
      const reviewToggler = await getDocs(reviewToggleRef)
      setDbReviewToggler(
        reviewToggler.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[0]
          .toggle
      )
      console.log(dbReviewToggler)
    }
    getReviewToggle()
  })

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
      {!dbReviewToggler ? (
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
          {dbReview.map((user) => (
            <section id='user-review'>
              <div className='btn-review'>
                <h4> Name: {user.name}</h4>
                <h4 style={{ display: 'flex', alignItems: 'center' }}>
                  Ratings:{' '}
                  {user.rating && <StarRating averageRatings={user.rating} />}
                </h4>
                <h4>Review : {user.review_msg}</h4>
              </div>
            </section>
          ))}
        </>
      )}
    </div>
  )
}

export default Feedback
