import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home';

function App() {
  return (
    <div>
       <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/registration' element={<Register />}/>
       
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App