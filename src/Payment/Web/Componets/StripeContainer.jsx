import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React from 'react'

const PUBLICK_KEY =
  'pk_test_51L1tkNG0kJQ2NVVeZidQTXtvOpXSvMLiDfHoEl0vrB3iLnaXABXOCk2Ncd4wmcexKeyT9nCw20QzL5L2ZxauwoDb00qbAmWGgi'

const stripeTestPromise = loadStripe(PUBLICK_KEY)

const StripeContainer = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  )
}

// tutorial link https://www.youtube.com/watch?v=XKWJFpZYVAQ
// time 6:04/33:04
export default StripeContainer
