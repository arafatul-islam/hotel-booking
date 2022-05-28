import React from 'react'
import stuff from './../Fake-data/Stuff'
import './../App.css'

const Stuff = () => {
  return (
    <>
      {stuff.map((item) => (
        <div
          style={{
            border: '1px solid black',
            margin: '2px',
            display: 'flex',
          }}
        >
          <h1>Name:{item.name}</h1>
          <h1>Title:{item.title}</h1>
          <h1>Contact:{item.contact}</h1>
        </div>
      ))}
    </>
  )
}

export default Stuff
