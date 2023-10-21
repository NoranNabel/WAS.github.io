import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import ComingSoon from './Pages/ComingSoon';
import ContactUs from './Pages/ContactUS';
import Error from './Pages/Error';
import Home from './Pages/Home'
import About from './Pages/About';
import Layout from './Pages/Layout';


function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<ContactUs />} />

            <Route path='/ComingSoon' element={<ComingSoon />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
