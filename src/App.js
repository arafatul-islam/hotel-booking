import './App.css'
import Home from './Pages/Home'
import Rooms from './Pages/Rooms'
import SingleRoom from './Pages/SingleRoom'
import Error from './Pages/Error'
import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Image360 from './Components/Image360'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='home' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='rooms' element={<Rooms />}>
          <Route path=':slug' element={<SingleRoom />}>
            <Route path=':img' element={<Image360 />}></Route>
          </Route>
        </Route>

        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
