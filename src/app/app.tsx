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
import { RequestForReg } from '../pages/requestForReg/requestForReg'
import { Layout } from '../pages/layout/layout'
import { CreatePost } from '../pages/createPost/createPost'
import { RegisterDone } from '../pages/registerDone/registerDone'

function App() {
  const location = useLocation()
  const background = location.state?.background

  return (
    <div className={styles.app}>
      <Routes location={background || location}>
        <Route path="/" element={<Layout><Main /></Layout>} />

        <Route path="/profile">
          <Route index element={<Layout header={false}><Profile /></Layout>} />
          <Route path="profileChanges" element={<Layout header={false}><ProfileChanges /></Layout>} />
          <Route path="settings" element={<Layout header={false}><ProfileSettings /></Layout>} />
        </Route>

        <Route path="/requestForReg/:type" element={<RequestForReg />} />
        <Route path="/selections/:type" element={<Layout><Selections /></Layout>} />
        <Route path="/welcomePage" element={<WelcomeScreen />} />
        <Route path="/login" element={<Layout header={false} footer={false}><Login /></Layout>} />
        <Route path="/register" element={<Layout header={false} footer={false}><Register /></Layout>} />
        <Route path="/register/done" element={<Layout header={false} footer={false}><RegisterDone /></Layout>} />
        <Route path="/screenSaver" element={<Screensaver />} />

        <Route path="/newsFeed" element={<Layout><News /></Layout>}>
          <Route index element={<NewsFeed />} />
          <Route path="/newsFeed/broadcasts" element={<Broadcasts />} />
          <Route path="/newsFeed/myPosts" element={<MyPosts />} />
          <Route path="/newsFeed/myPosts/createPost" element={<CreatePost />} />
        </Route>


        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
