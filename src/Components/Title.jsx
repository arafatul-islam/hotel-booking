import React, { useState } from 'react'
import './../App.css'
const Title = ({ title }) => {
  return (
    <>
      <div className='section-title'>
        <h1>{title}</h1>
        <div />
      </div>
    </>
  )
}

export default Title
