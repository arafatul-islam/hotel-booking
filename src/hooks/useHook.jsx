import React, { useState } from 'react'
import useAuth from './useAuth'
import { exportSlug } from './../Pages/SingleRoom'
import { db } from '../Backend/Firebase/firebase.initialize'
import { collection, addDoc } from 'firebase/firestore'
import { async } from '@firebase/util'

const useHook = () => {
  const [hover, setHover] = useState(null)
  const [toggle, setToggle] = useState(false)
  const [toggleVR, setToggleVR] = useState(false)
  const [review, setReview] = useState('')
  const [reservedRoom, setReservedRoom] = useState('')
  const [getSlug, setGetSlug] = useState('')
  const { user, rating, disableReview, setDisableReview } = useAuth()

  // review store in fireStore
  const dbSlugRef = collection(db, `${exportSlug}`)
  const dbUsers = collection(db, 'users')

  const handleFeedback = async (e) => {
    e.preventDefault()

    await addDoc(dbSlugRef, {
      name: user.displayName,
      rating: rating,
      review_msg: review,
    })
    setDisableReview(true)

    console.log(rating)
    console.log(review)
    console.log(disableReview)
    console.log(exportSlug)
  }

  const handleFeedbackText = (e) => {
    setReview(e.target.value)
  }

  return {
    getSlug,
    setGetSlug,
    reservedRoom,
    setReservedRoom,
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
