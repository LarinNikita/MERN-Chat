import React from 'react'

import { Routes, Route } from 'react-router-dom'

import { Auth, Home } from './pages'

import './styles/index.scss'

const App = () => {
  return (
    <div className="wrapper">
      <Routes>
        <Route path='/' element={<Auth />} />
        <Route path='/im' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
