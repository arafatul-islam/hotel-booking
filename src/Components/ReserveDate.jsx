import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { addDays } from 'date-fns'

const ReserveDate = (props) => {
  const [dateRange, setDateRange] = useState([null, null])
  const [startDate, endDate] = dateRange
  // console.log(props)

  const dateDiff = Math.floor((endDate - startDate) / (24 * 3600 * 1000) + 1)
  // console.log(endDate)

  const handleReserveRoom = () => {
    return (
      <div
        style={{
          fontWeight: '500',
          fontSize: '1.2rem',
          fontFamily: 'monospace',
        }}
      >
        <p>
          {!endDate
            ? 'please reserve your prefered room'
            : `you reserved your room for ${dateDiff} ${
                dateDiff > 1 ? 'days' : 'day'
              }`}
        </p>
        <p style={{ marginTop: '5px' }}>
          {dateDiff > 0 && 'Thank you for being with us'}
        </p>
      </div>
    )
  }

  return (
    <div className='reserve-date'>
      <DatePicker
        className='date-picker'
        selectsRange={true}
        startDate={new Date()}
        endDate={endDate}
        minDate={new Date()}
        maxDate={addDays(new Date(), 15)}
        dateFormat='dd/MM/yyyy'
        onChange={(update) => {
          setDateRange(update)
        }}
        withPortal
        isClearable
      />
      <h1 className='day-diff'>
        {endDate ? (
          <p>
            {dateDiff} {dateDiff > 1 ? <span>days</span> : <span>day</span>}
          </p>
        ) : (
          ''
        )}
      </h1>
      <button className='btn-book' onClick={handleReserveRoom}>
        {handleReserveRoom()}
      </button>
    </div>
  )
}

export default ReserveDate
