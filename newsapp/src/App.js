import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home'
import ContactUs from './components/ContactUs'
import Details from './components/Details'
import './App.css'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/About' element={<About/>}/> 
        <Route path='/contact' element={<ContactUs/>}/> 
        <Route path='/details' element={<Details/>}/> 
      </Routes>
    </div>
  )
}

export default App


