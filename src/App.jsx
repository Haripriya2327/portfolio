import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import  Info from './pages/Info'
import  Projects from './pages/Projects'

function App() { 
  const [count, setCount] = useState(0)

  return (
    <>  
<Navbar />
<Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/projects" element={<Projects />} />
          </Routes>
    </>
  )
}

export default App
