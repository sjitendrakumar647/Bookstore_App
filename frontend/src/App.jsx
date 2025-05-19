// import { useState } from 'react'
'use client'
// import React from 'react'
import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
// import Login from './components/Login'
// import SignUpPage from './components/SignUpPage'
import Books from './book/Books'
import Home from './home/Home'
import Loginmodal from './components/Loginmodal'
import Contact from './contact/Contact'
import Registermodal from './components/Registermodal'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    
      <div className="app bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignUpPage />} /> */}
            <Route path="/book" element={<Books />} />
            <Route path="/contact" element={<Contact />} /> 
          </Routes>
          <Loginmodal/>
          <Registermodal/>
          <ToastContainer position="top-right" autoClose={3000}/>
      </div>
    
  )
}

export default App
