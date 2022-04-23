import './App.css'
import Home from './Pages/Home'
import Rooms from './Pages/Rooms'
import SingleRoom from './Pages/SingleRoom'
import Error from './Pages/Error'
import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='home' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='rooms' element={<Rooms />}>
          <Route path=':slug' element={<SingleRoom />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
