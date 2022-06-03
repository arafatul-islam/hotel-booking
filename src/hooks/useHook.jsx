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
  const { user, rating, disableReview, setDisableReview, cart, setCart } =
    useAuth()

  // review store in fireStore
  const dbSlugRef = collection(db, `${exportSlug}`)
  const dbUsersRef = collection(db, `${user?.email}`)
  const reviewToggleRef = collection(db, `${user?.email}review`)

  const handleFeedback = async (e) => {
    e.preventDefault()

    await addDoc(dbSlugRef, {
      name: user.displayName,
      rating: rating,
      review_msg: review,
    })

    await addDoc(reviewToggleRef, {
      toggle: true,
    })
  }

  // food order save to firestore db
  const handleOrder = async (foodName, foodPrice, foodImg) => {
    cart.push(foodPrice)
    setCart([...cart], foodPrice)
    const totalPrice = cart.reduce((p, c) => p + c, 0)

    // store to db food data
    await addDoc(dbUsersRef, {
      name: user.displayName,
      foodName: foodName,
      foodPrice: foodPrice,
      totalPrice: totalPrice,
      img: foodImg,
    })
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
    handleOrder,
  }
}

export default useHook
