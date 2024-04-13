import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage1 from './LandingPage1'
import LandingPage2 from './LandingPage2'
import Register from './Register'
import Login from './Login'
import OtherInfo from './OtherInfo'
import TrackerPage from './TrackerPage'
function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage1/>}/>
          <Route path='/landing2' element={<LandingPage2/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='Login' element={<Login/>}/>
          <Route path='/otherinfo' element={<OtherInfo/>}/>
          <Route path='/tracker-page' element={<TrackerPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
