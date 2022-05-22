import React, { useState } from 'react'
import StripeContainer from '../Payment/Web/Componets/StripeContainer'

const ShowStripe = () => {
  const [showItem, setShowItem] = useState(false)
  return (
    <div>
      <h1>Hotel Room Payment</h1>
      {showItem ? (
        <StripeContainer />
      ) : (
        <>
          {' '}
          <h1></h1>
          <button
            className='btn-book'
            onClick={() => {
              setShowItem(true)
            }}
          >
            {' '}
            Book Your Room
          </button>
        </>
      )}
    </div>
  )
}

export default ShowStripe
