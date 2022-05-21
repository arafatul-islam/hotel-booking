import React, { useState } from 'react'

const useHook = () => {
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)
  const [toggle, setToggle] = useState(false)
  const [toggleVR, setToggleVR] = useState(false)
  const [review, setReview] = useState('')
  const [desiredRoom, setDesiredRoom] = useState('')

  const handleFeedback = (e) => {
    e.preventDefault()
    console.log(rating)
    console.log(review)
  }

  const handleFeedbackText = (e) => {
    setReview(e.target.value)
  }

  return {
    desiredRoom,
    setDesiredRoom,
    rating,
    setRating,
    hover,
    setHover,
    toggle,
    setToggle,
    toggleVR,
    setToggleVR,
    review,
    setReview,
    handleFeedback,
    handleFeedbackText,
  }
}

export default useHook
