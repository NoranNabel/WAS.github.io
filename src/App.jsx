import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import Footer from './Components/Footer';
import NavBar from './Components/NavBar'
import NVB from './Components/NVB'
import Home from './Pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>
      {/* <NavBar /> */}
      <NVB />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
