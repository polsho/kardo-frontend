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
import { Profile } from '../pages/profile/profile'
import { ProfileSettings } from '../pages/profileSettings/profileSettings'
import { ProfileChanges } from '../pages/profileChanges/profileChanges'
import { NewsFeed } from '../pages/newsFeed /newsFeed'
import { NotFound } from '../pages/notFound/notFound'
import { News } from '../pages/news/news'
import { Broadcasts } from '../pages/broadcasts/broadcasts'
import { MyPosts } from '../pages/myPosts/myPosts'

function App() {
  const location = useLocation()
  const background = location.state?.background

  return (
    <div className={styles.app}>
      {/* <AppHeader /> */}
      <Routes location={background || location}>
        <Route path='/main' element={<Main />} />
        <Route path="/profile">
          <Route index element={<Profile />} />
          <Route path="profileChanges" element={<ProfileChanges/>} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>
        <Route path="/welcomePage" element={<WelcomeScreen/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/screenSaver" element={<Screensaver/>}/>
        <Route path="/newsFeed" element={<NewsFeed/>}/>

        <Route path="/newsFeed" element={<News/>}>
          <Route path="/newsFeed" element={<NewsFeed/>}/>
          <Route path="/newsFeed/broadcasts" element={<Broadcasts/>} />
          <Route path="/newsFeed/myPosts" element={<MyPosts/>} />
        </Route>

        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
