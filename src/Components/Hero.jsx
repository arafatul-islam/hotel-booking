import React, { Children } from 'react'

export default function Hero(props) {
  const { children, hero } = props

  return (
    <header className={hero} id='header'>
      {children}
    </header>
  )
}

Hero.defaultProps = {
  hero: 'defaultHero',
}
