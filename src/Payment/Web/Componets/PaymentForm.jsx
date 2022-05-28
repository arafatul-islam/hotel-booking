import React, { useState } from 'react'
import './Stripe.css'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios'

const CARD_OPTIONS = {
  iconStyle: 'solid',
  style: {
    base: {
      iconColor: '#c4f0ff',
      color: '#fff',
      fontWeight: '500',
      fontFamily: 'Roboto,Open Sans,Segoe UI,sans-serif',
      fontSize: '18px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': { color: '#fce883' },
      '::placeholder': { color: '#87bbfd' },
    },
    invalid: {
      iconColor: '#ffc7ee',
      color: '#ffc7ee',
    },
  },
}

const PaymentForm = () => {
  const [success, setSuccess] = useState(false)
  const [paymentSuccess, setPaymentSuccess] = useState('')
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    })

    if (!error) {
      try {
        const { id } = paymentMethod
        const response = await axios.post('http://localhost:4000/payment', {
          amount: 1000,
          id,
        })
        if (response.data.success) {
          setPaymentSuccess('successful payment')
          setSuccess(true)
        }
      } catch (error) {
        console.log('error', error)
      }
    } else {
      console.log(error.message)
    }
  }
  return (
    <>
      {!success ? (
        <form onSubmit={handleSubmit}>
          <fieldset className='FormGroup'>
            <div className='FormRow'>
              <CardElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <button className='btn-book'>Pay</button>
        </form>
      ) : (
        ''()
      )}
    </>
  )
}

export default PaymentForm
