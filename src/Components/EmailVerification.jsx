import React from 'react'
import Banner from './Banner'
import Hero from './Hero'

const EmailVerification = () => {
  return (
    <>
      <Hero>
        <Banner
          title='Your email is not verified'
          subtitle='please verify your email'
        />
      </Hero>
    </>
  )
}

export default EmailVerification
