import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { addDays } from 'date-fns'

const ReserveDate = () => {
  const [dateRange, setDateRange] = useState([null, null])
  const [startDate, endDate] = dateRange
  return (
    <DatePicker
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
  )
}

export default ReserveDate
