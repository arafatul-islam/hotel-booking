import './App.css'
import Home from './Pages/Home'
import Rooms from './Pages/Rooms'
import SingleRoom from './Pages/SingleRoom'
import Error from './Pages/Error'
import { Route, Routes, useParams } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Image360 from './Components/Image360'
import Login from './Login/Login'
import Register from './Login/Register'
import Reservation from './Components/Reservation'
import EmailVerification from './Components/EmailVerification'
import { useState } from 'react'
import useHook from './hooks/useHook'

// import ShowSingleRoom from './Components/ShowSingleRoom'

function App() {
  const { reservedRoom, setReservedRoom } = useHook()
  const roomName = (name) => {
    setReservedRoom(name)
  }
  // console.log(reservedRoom)
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='home' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='rooms' element={<Rooms />}></Route>
        <Route path=':slug' element={<SingleRoom roomName={roomName} />}>
          <Route path=':img' element={<Image360 />}></Route>
        </Route>
        <Route
          path='reservation'
          element={<Reservation reservedRoom={reservedRoom} />}
        />
        <Route path='email-verification' element={<EmailVerification />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
