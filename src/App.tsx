import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './pages/Main'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Flights from './pages/Flights'
function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path='/register' element={<Signup/>} />
          <Route path='/flights' element={<Flights/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App