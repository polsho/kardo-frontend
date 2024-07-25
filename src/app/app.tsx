import React from 'react'
import style from './app.css'
import { Routes, Route, useLocation, useNavigate, useParams } from 'react-router-dom'
//   import { useDispatch } from '../../services/store';
import { TabBar } from '../components/tabBar/tabBar'

import { useEffect } from 'react'

function App() {
  const location = useLocation()
  const background = location.state?.background

  return (
    <div className={style.app}>
      <TabBar />
      <Routes location={background || location}>{/* <Route path='/' element={<Main />} /> */}</Routes>
    </div>
  )
}

export default App
