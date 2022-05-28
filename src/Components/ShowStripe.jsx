import React, { useState } from 'react'
import Bkash from '../Payment/Bkash/Bkash'
import StripeContainer from '../Payment/Web/Componets/StripeContainer'

const ShowStripe = () => {
  const [showItem, setShowItem] = useState(false)
  return (
    <div>
      <h1>Hotel Room Payment</h1>
      {showItem ? (
        <>
          <StripeContainer />
          <p style={{ textAlign: 'center', marginTop: '18px' }}>Or Use bKash</p>
          <Bkash />
        </>
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
