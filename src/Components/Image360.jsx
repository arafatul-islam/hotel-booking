import React from 'react'
import { Outlet, useParams } from 'react-router-dom'

const Image360 = () => {
  const { slug } = useParams()
  let url = ''
  if (slug === 'single-economy') {
    url =
      'https://momento360.com/e/u/e7298be2f11b4b31911ead7d75270b24?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium'
  } else if (slug === 'single-basic') {
    url =
      'https://momento360.com/e/u/2c18b29e234042fa91175e706da60ad7?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium'
  } else if (slug === 'single-standard') {
    url =
      'https://momento360.com/e/u/a09806806b1c4305a6dcec255a9b2db1?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium'
  } else if (slug === 'single-deluxe') {
    url =
      'https://momento360.com/e/u/984973d24bd74a00baf697671f429e47?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium'
  } else if (slug === 'double-economy') {
    url =
      'https://momento360.com/e/u/a09806806b1c4305a6dcec255a9b2db1?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium'
  } else if (slug === 'double-basic') {
    url =
      'https://momento360.com/e/u/a09806806b1c4305a6dcec255a9b2db1?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium'
  } else if (slug === 'double-standard') {
    url =
      'https://momento360.com/e/u/984973d24bd74a00baf697671f429e47?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium'
  } else if (slug === 'double-deluxe') {
    url =
      'https://momento360.com/e/u/a09806806b1c4305a6dcec255a9b2db1?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium'
  } else if (slug === 'family-economy') {
    url =
      'https://momento360.com/e/u/984973d24bd74a00baf697671f429e47?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium'
  } else if (slug === 'family-basic') {
    url =
      'https://momento360.com/e/u/a09806806b1c4305a6dcec255a9b2db1?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium'
  } else if (slug === 'family-standard') {
    url =
      'https://momento360.com/e/u/a09806806b1c4305a6dcec255a9b2db1?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium'
  } else if (slug === 'family-deluxe') {
    url =
      'https://momento360.com/e/u/a09806806b1c4305a6dcec255a9b2db1?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium'
  } else if (slug === 'presidential-room') {
    url =
      'https://momento360.com/e/u/a09806806b1c4305a6dcec255a9b2db1?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium'
  }

  return (
    <div>
      <iframe className='img-360' src={url} frameBorder='0'></iframe>
    </div>
  )
}

export default Image360
