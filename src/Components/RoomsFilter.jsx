import React from 'react'
import { useContext } from 'react'
import { RoomContext } from '../Context'
import Title from '../Components/Title'
const RoomsFilter = ({ rooms }) => {
  const context = useContext(RoomContext)
  const {
    handleChange,
    capacity,
    type,
    price,
    minPrice,
    maxPrice,
    size,
    minSize,
    maxSize,
  } = context
  return (
    <section className='filter-container'>
      <Title title='Search Rooms' />
      <form className='filter-form'>
        {/* select type */}
        <div className='form-group'>
          <label htmlFor='type'>room type</label>
          <select
            name='type'
            id='type'
            className='form-control'
            onChange={handleChange}
          ></select>
        </div>
        {/* end of select type */}
      </form>
    </section>
  )
}

export default RoomsFilter
