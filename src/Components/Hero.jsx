import React, { Children } from 'react'

export default function Hero(props) {
  const { children, hero } = props
  console.log(props)
  console.log(hero)
  return (
    <header className={hero} id='header'>
      {children}
    </header>
  )
}

Hero.defaultProps = {
  hero: 'defaultHero',
}
