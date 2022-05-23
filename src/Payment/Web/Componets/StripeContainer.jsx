import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React from 'react'
import PaymentForm from './PaymentForm'

const PUBLICK_KEY =
  'pk_test_51L2KlAHvJeXo3Oe3askIy7AuesBBDnYlKG8CsNnpUbnWWffwvd1miDNWrhdWg2rSneUBjbmVTFuk0lPIGLEibL9C00o4DvTHd7'

const stripeTestPromise = loadStripe(PUBLICK_KEY)

const StripeContainer = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  )
}

export default StripeContainer
