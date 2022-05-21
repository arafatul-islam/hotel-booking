import React from 'react'
import StarRating from '../Components/StarRating'
import useFirebase from '../hooks/useFirebase'
import useHook from '../hooks/useHook'

const Feedback = () => {
  const { review, setReview, handleFeedback, handleFeedbackText } = useHook()
  const { emailVerified } = useFirebase()

  if (!emailVerified) {
    return (
      <div className='feedback'>
        <form onSubmit={handleFeedback} disabled>
          <StarRating />
          <div>
            <textarea
              placeholder='we love to hear your feedback'
              onChange={handleFeedbackText}
              disabled
            ></textarea>
          </div>
          <button className='btn-book'>submit</button>
        </form>
      </div>
    )
  }
  return (
    <div className='feedback'>
      <StarRating />
      <form onSubmit={handleFeedback} disabled>
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
