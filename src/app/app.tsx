import React from 'react'
import styles from './app.module.css'
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
import { NewsFeed } from '../pages/newsFeed/newsFeed'
import { NotFound } from '../pages/notFound/notFound'
import { News } from '../pages/news/news'
import { Broadcasts } from '../pages/broadcasts/broadcasts'
import { MyPosts } from '../pages/myPosts/myPosts'
import { Selections } from '../pages/selections/selections'
import { Layout } from '../pages/layout/layout'

function App() {
  const location = useLocation()
  const background = location.state?.background

  return (
    <div className={styles.app}>
      <Routes location={background || location}>
        <Route path="/main" element={<Layout><Main /></Layout>} />
        <Route path="/profile">
          <Route index element={<Layout header={false}><Profile /></Layout>} />
          <Route path="profileChanges" element={<ProfileChanges />} />
          <Route path="settings" element={<Layout header={false}><ProfileSettings /></Layout>} />
        </Route>
        <Route path="/selections/:type" element={<Selections />} />
        <Route path="/welcomePage" element={<WelcomeScreen />} />
        <Route path="/login" element={<Layout header={false} footer={false}><Login /></Layout>} />
        <Route path="/register" element={<Register />} />
        <Route path="/screenSaver" element={<Screensaver />} />

        <Route path="/newsFeed" element={<News />}>
          <Route index element={<NewsFeed />} />
          <Route path="/newsFeed/broadcasts" element={<Broadcasts />} />
          <Route path="/newsFeed/myPosts" element={<MyPosts />} />
        </Route>

        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
