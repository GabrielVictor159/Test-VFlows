import { useState } from 'react'
import './styles/App.scss'
import * as React from 'react'
import { Route, Routes } from 'react-router'
import Login from './pages/Login'

const App = (props:any) => {
  

  return (
 <Routes>
  <Route path="/" element={<Login />}/>
 </Routes>
  )
}

export default App
