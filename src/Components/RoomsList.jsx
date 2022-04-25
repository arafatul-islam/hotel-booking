import React from 'react'
import Room from './Room'

const RoomsList = (props) => {
  const { rooms } = props
  if (rooms.length === 0) {
    return (
      <div className='empty-search'>
        <h3>No matched search parameters</h3>
      </div>
    )
  }
  return (
    <section className='roomslist'>
      <div className='roomslist-center'>
        {rooms.map((item) => (
          <Room key={item.id} room={item} />
        ))}
      </div>
    </section>
  )
}

export default RoomsList
