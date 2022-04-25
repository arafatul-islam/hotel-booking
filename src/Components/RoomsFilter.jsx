import React from 'react'
import { useContext } from 'react'
import { RoomContext } from '../Context'
import Title from '../Components/Title'

// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))]
}

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
    breakfast,
    pets,
  } = context
  // get unique types
  let types = getUnique(rooms, 'type')
  // add all
  types = ['all', ...types]
  // map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    )
  })
  // capacity
  let people = getUnique(rooms, 'capacity')
  // map to jsx
  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    )
  })

  return (
    <section className='filter-container'>
      <Title title='Search Rooms' />
      <form className='filter-form'>
        {/* select type */}
        <div className='form-group'>
          <label htmlFor='type' className='form-group label'>
            room type
          </label>
          <select
            name='type'
            value={type}
            id='type'
            className='form-control'
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* end of select type */}
        {/* capacity*/}
        <div className='form-group'>
          <label htmlFor='type' className='form-group label'>
            Guests
          </label>
          <select
            name='capacity'
            value={capacity}
            id='capacity'
            className='form-control'
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/* end of capacity  */}
        {/* room price  */}
        <div className='form-group'>
          <label htmlFor='price' className='form-group label'>
            room price {price}
          </label>
          <input
            type='range'
            name='price'
            id='price'
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={handleChange}
            className='form-control'
          />
        </div>
        {/* end of price  */}
        {/* {size} */}
        <div className='form-group'>
          <label htmlFor='size' className='form-group label'>
            room size
          </label>
          <div className='size-inputs'>
            <input
              type='number'
              name='maxSize'
              id='size'
              value={maxSize}
              onChange={handleChange}
              className='size-input'
            />
          </div>
        </div>
        {/* {end of size} */}
        {/* {extras} */}
        <div className='form-group'>
          <div className='single-extra'>
            <label htmlFor='breakfast' className='single-extra label'>
              Breakfast
            </label>
            <input
              type='checkbox'
              name='breakfast'
              id='breakfast'
              checked={breakfast}
              onChange={handleChange}
            />
          </div>
          <div className='single-extra'>
            <label htmlFor='pets' className='single-extra label'>
              Pets
            </label>
            <input
              type='checkbox'
              name='pets'
              id='pets'
              checked={pets}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* {end of extras} */}
      </form>
    </section>
  )
}

export default RoomsFilter
