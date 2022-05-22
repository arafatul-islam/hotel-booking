import React, { useContext, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { addDays } from 'date-fns'
import ShowStripe from './ShowStripe'
import useHook from '../hooks/useHook'

const ReserveDate = () => {
  const [dateRange, setDateRange] = useState([null, null])
  const [startDate, endDate] = dateRange
  // const { getSlug } = useHook()
  // console.log(getSlug)

  const dateDiff = Math.floor((endDate - startDate) / (24 * 3600 * 1000) + 1)

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

      <button className='btn-book'>
        <p
          style={{
            fontSize: '1.3rem',
            fontfamily: 'sans-serif',
            fontWeight: '500',
          }}
        >
          {!endDate
            ? 'please reserve your prefered room'
            : `${dateDiff} ${dateDiff > 1 ? 'Days' : 'Day'}`}
        </p>
      </button>

      {endDate && (
        <div className='stripe-container'>
          <ShowStripe />
        </div>
      )}
    </div>
  )
}

export default ReserveDate
