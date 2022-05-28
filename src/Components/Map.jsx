import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const containerStyle = {
  width: '60vw',
  height: '400px',
}

const center = {
  lat: 21.417477463250542,
  lng: 91.98089962798262,
}
const Map = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Our Location on Google Map</h1>
      <section id='map'>
        <LoadScript googleMapsApiKey={process.env.GOOGLE_MAP_API_KEY}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={14}
          ></GoogleMap>
        </LoadScript>
      </section>
    </>
  )
}

export default Map
