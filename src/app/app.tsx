import React from 'react'
import style from './app.css'
import { Routes, Route, useLocation, useNavigate, useParams } from 'react-router-dom'
//   import { useDispatch } from '../../services/store';

import { useEffect } from 'react'
import { Screensaver } from '../pages/screensaver/screensaver'
import { Main } from '../pages/main/main'
import { WelcomeScreen } from '../pages/welcomeScreen/welcomeScreen'

function App() {
  const location = useLocation()
  const background = location.state?.background

  return (
    <div className={style.app}>
      {/* <AppHeader /> */}
      <Routes location={background || location}>
        <Route path="/" element={<Screensaver/>}/>
        <Route path='/main' element={<Main />} />
        <Route path="/welcomePage" element={<WelcomeScreen/>}/>
      </Routes>

    </div>
  )
}

export default App
