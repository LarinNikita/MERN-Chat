import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Home, Login, Registration } from './pages'

import './styles/index.scss'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Registration />} />
    </Routes>
  );
}

export default App;
