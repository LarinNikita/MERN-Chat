import React, { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchMe } from './redux/slices/user'

import { Home, Login, Registration } from './pages'
import { CheckEmail } from './components'

import './styles/index.scss'

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMe());
  }, [dispatch]);

  return (
    <Routes>

      <Route index element={<Home />} />

      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Registration />} />
      <Route path='/register/verify' element={<CheckEmail />} />

      <Route path='*' element={<Navigate to="/login" />} />

    </Routes>
  );
}

export default App;
