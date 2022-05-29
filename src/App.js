import './App.css'
import Home from './Pages/Home'
import Rooms from './Pages/Rooms'
import SingleRoom from './Pages/SingleRoom'
import Error from './Pages/Error'
import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Image360 from './Components/Image360'
import Login from './Login/Login'
import Register from './Login/Register'
import Reservation from './Components/Reservation'
import EmailVerification from './Components/EmailVerification'
import useHook from './hooks/useHook'
import Profile from './Login/Profile'
import PrivateOutlet from './PrivateRoutes/PrivateOutlet'
import Stuff from './Components/Stuff'
import FoodService from './Components/FoodService'

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
        <Route path='/' element={<Navigate to='home' />} />
        <Route path='stuff' element={<Stuff />} />
        <Route path='food-service' element={<FoodService />} />

        <Route path='/login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='email-verification' element={<EmailVerification />} />

        <Route path='rooms' element={<Rooms />}></Route>
        <Route path=':slug' element={<SingleRoom roomName={roomName} />}>
          <Route path=':img' element={<Image360 />}></Route>
        </Route>
        {/* private routes  */}
        <Route path='/*' element={<PrivateOutlet />}>
          <Route path='email-verification' element={<EmailVerification />} />
          <Route path='profile' element={<Profile />} />
          <Route
            path='reservation'
            element={<Reservation roomName={roomName} />}
          />
        </Route>

        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
