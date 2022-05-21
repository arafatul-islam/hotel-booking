import React from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import '../App.css'

const VRvideos = () => {
  const { slug } = useParams()
  let url = ''
  if (slug === 'single-economy') {
    url = 'https://www.youtube.com/watch?v=54wxpXIWAXk'
  } else if (slug === 'single-basic') {
    url = 'https://www.youtube.com/watch?v=LgIbdobc0hc'
  } else if (slug === 'single-standard') {
    url = 'https://www.youtube.com/watch?v=54wxpXIWAXk'
  } else if (slug === 'single-deluxe') {
    url = 'https://www.youtube.com/watch?v=LgIbdobc0hc'
  } else if (slug === 'double-economy') {
    url = 'https://www.youtube.com/watch?v=54wxpXIWAXk'
  } else if (slug === 'double-basic') {
    url = 'https://www.youtube.com/watch?v=Lyg73o8JHdA'
  } else if (slug === 'double-standard') {
    url = 'https://www.youtube.com/watch?v=54wxpXIWAXk'
  } else if (slug === 'double-deluxe') {
    url = 'https://www.youtube.com/watch?v=Lyg73o8JHdA'
  } else if (slug === 'family-economy') {
    url = 'https://www.youtube.com/watch?v=9XM0SMPZEvc'
  } else if (slug === 'family-basic') {
    url = 'https://www.youtube.com/watch?v=9XM0SMPZEvc'
  } else if (slug === 'family-standard') {
    url = 'https://www.youtube.com/watch?v=Lyg73o8JHdA'
  } else if (slug === 'family-deluxe') {
    url = 'https://www.youtube.com/watch?v=JBXb16k_8g0'
  } else if (slug === 'presidential-room') {
    url = 'https://www.youtube.com/watch?v=LgIbdobc0hc'
  }
  return (
    <div className='img-vr-container'>
      <ReactPlayer width='500x' height='400px' controls url={url} />
    </div>
  )
}

export default VRvideos
