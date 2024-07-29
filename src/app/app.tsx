import React from 'react'
import styles from './app.css'
import { Routes, Route, useLocation, useNavigate, useParams } from 'react-router-dom'
//   import { useDispatch } from '../../services/store';

import { useEffect } from 'react'
import { Screensaver } from '../pages/screensaver/screensaver'
import { Main } from '../pages/main/main'
import { WelcomeScreen } from '../pages/welcomeScreen/welcomeScreen'
import { Login } from '../pages/login/login'
import { Register } from '../pages/register/register'
import { Modal } from '../components/modal/modal'
import { NotFound } from '../pages/notFound/notFound'
import { RegisterDone } from '../pages/registerDone/registerDone'

function App() {
  const location = useLocation()
  const background = location.state?.background
  const navigate = useNavigate();


  const closeModal = (): void => {
    return (
      navigate(-1)
    )
  }

  return (
    <div className={styles.app}>
      {/* <AppHeader /> */}
      <Routes location={background || location}>
        <Route path='/' element={<Main />} />
        <Route path="/welcomePage" element={<WelcomeScreen/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/screenSaver" element={<Screensaver/>}/>
        <Route path="/register/done" element={<RegisterDone/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>

      {background && (
        <Routes>
          <Route path="/register/done" element={<Modal closeModal={closeModal}><RegisterDone/></Modal>}/>
        </Routes>
      )}
    </div>
  )
}

export default App
