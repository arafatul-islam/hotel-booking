import { getDocs, collection } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { db } from '../Backend/Firebase/firebase.initialize'
import useAuth from '../hooks/useAuth'
import Hero from './Hero'
import Title from './Title'

const OrderList = () => {
  const { user, addedFood, setAddedFood } = useAuth()
  // food details from db
  const dbUsers = collection(db, user?.email)
  useEffect(() => {
    //getting food  from db
    const getSlugs = async () => {
      const food = await getDocs(dbUsers)
      setAddedFood(food.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getSlugs()
  }, [])

  return (
    <>
      <Title title='your ordered food' />
      <div id='food-cart'>
        {addedFood.map((food) => (
          <section id='user-review'>
            <div className='btn-review'>
              <img width={100} src={food.img} alt={food.foodName} />
              <h4>Name: {food.foodName}</h4>
              <h5>Price: {food.foodPrice}</h5>
              <h5>Total Bill: {food.totalPrice}</h5>
            </div>
          </section>
        ))}
      </div>
    </>
  )
}

export default OrderList

// const avg = allRating / parseInt(dbReview.length)

// setAverageRatings(avg)

// console.log(avg)
// console.log(averageRatings)
// const totalPrice = dbReview.reduce((prev, curr) => {
//   return prev + parseInt(curr.rating)
// }, 0)
