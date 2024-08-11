import { Route, Routes } from 'react-router-dom'
import './App.css'
import React, { useState } from 'react'
import Home from './pages/home'
import Search from './pages/search'
import Navbar from './components/Navbar'
function App() {


  return (
  <>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/search' element={<Search />}/>
    </Routes> 
  </>
    
  )
}

export default App
