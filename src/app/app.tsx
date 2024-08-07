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
import { Tasks } from '../pages/tasks/tasks'
import { Modal } from '../components/modal/modal'
import { PopUp } from '../components/popUp/popUp'
import { Comments } from '../pages/comments/comments'
import { Events } from '../pages/events/events'
import { Contest } from '../pages/contest/contest'
import { More } from '../pages/more/more'

function App() {
  const location = useLocation()
  const background = location.state?.background
  const navigate = useNavigate()

  return (
    <div className={styles.app}>
      <Routes location={background || location}>
        <Route path="/" element={<Layout><Main /></Layout>} />

        <Route path="/profile">
          <Route index element={<Layout header={false}><Profile /></Layout>} />
          <Route path="profileChanges" element={<Layout header={false}><ProfileChanges /></Layout>} />
          <Route path="settings" element={<Layout header={false}><ProfileSettings /></Layout>} />
        </Route>

        <Route path="/requestForReg/:type" element={<Layout><RequestForReg /></Layout>} />
        <Route path="/selections/:type" element={<Layout><Selections /></Layout>} />
        <Route path="/tasks/:id" element={<Layout><Tasks /></Layout>} />
        <Route path="/welcomePage" element={<WelcomeScreen />} />
        <Route path="/login" element={<Layout header={false} footer={false}><Login /></Layout>} />
        <Route path="/register" element={<Layout header={false} footer={false}><Register /></Layout>} />
        <Route path="/register/done" element={<Layout header={false} footer={false}><RegisterDone /></Layout>} />
        <Route path="/screenSaver" element={<Screensaver />} />

        <Route path="/newsFeed" element={<Layout><News /></Layout>}>
          <Route index element={<NewsFeed />} />
          <Route path="/newsFeed/broadcasts" element={<Broadcasts />} />
          <Route path="/newsFeed/myPosts" element={<MyPosts />} />
        </Route>
        
        <Route path="/createPost" element={<Layout header={false} footer={false}><CreatePost /></Layout>} />
        <Route path="/newsFeed/comments" element={<Layout header={false}><Comments /></Layout>} />


        <Route path="/events" element={<Layout header={true} footer={true}><Events /></Layout>}/>
        <Route path="/contest" element={<Layout header={true} footer={true}><Contest /></Layout>}/>
        <Route path="/more" element={<Layout header={true} footer={true}><More /></Layout>}/>
        
        <Route path="/alert" element={<Modal closeModal={() => {navigate(-1);}}>
              <PopUp text={'Можно выбрать не более 2 номинаций для участия'} />
            </Modal>} />

        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
