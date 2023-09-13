import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import Footer from './Components/Footer';
import NavBar from "./Components/NavBar"
import ComingSoon from './Pages/ComingSoon';
import ContactUs from './Pages/ContactUS';
import Error from './Pages/Error';
import Home from './Pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>
        {/* <NavBar /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ComingSoon' element={<ComingSoon />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
