import React, { Children } from 'react'

export default function Hero({ children, hero }) {
  return (
    <header className={hero} id='header'>
      {children}
    </header>
  )
}

Hero.defaultProps = {
  hero: 'defaultHero',
}
