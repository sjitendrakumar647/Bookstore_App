// import { useState } from 'react'
'use client'
// import React from 'react'
import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import SignUpPage from './components/SignUpPage'
import Books from './book/Books'
import Home from './home/Home'
import Loginmodal from './components/Loginmodal'
import Contact from './contact/Contact'

function App() {

  return (
    
      <div className="app bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignUpPage />} />
            <Route path="/book" element={<Books />} />
            <Route path="/contact" element={<Contact />} /> 
          </Routes>
          <Loginmodal/>
      </div>
    
  )
}

export default App
