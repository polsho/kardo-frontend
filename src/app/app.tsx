import React, { useEffect } from 'react'
import styles from './app.module.css'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'

import { Screensaver } from '../pages/screensaver/screensaver'
import { Main } from '../pages/main/main'
import { RegisterStep1 } from '../pages/registerStep1/registerStep1'
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
import { Tasks } from '../pages/tasks/tasks'
import { Modal } from '../components/modal/modal'
import { PopUp } from '../components/popUp/popUp'
import { Comments } from '../pages/comments/comments'
import { Events } from '../pages/events/events'
import { Contest } from '../pages/contest/contest'
import { More } from '../pages/more/more'
import { ForgotPassword } from '../pages/forgotPassword/forgotPassword'
import { RegisterStep2 } from '../pages/registerStep2/registerStep2'
import { Login } from '../pages/login/login'
import { ProtectedRoute } from '../components/protectedRoute/protectedRoute'
import { useDispatch } from '../services/store'
import { checkUserAuth } from '../services/actions/actionsSelector'
import { EventById } from '../pages/eventById/eventById'
import { ContestFeed } from '../pages/contestFeed/contestFeed'
import { VideoContest } from '../pages/videoContest/videoContest'
import { Kids } from '../pages/kids/kids'

function App() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserAuth())
  }, [])

  return (
    <div className={styles.app}>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Main />
            </Layout>
          }
        />

        <Route path="/screenSaver" element={<Screensaver />} />

        <Route path="/profile">
          <Route
            index
            element={
              <ProtectedRoute
                component={
                  <Layout header={false}>
                    <Profile />
                  </Layout>
                }
              />
            }
          />
          <Route
            path="profileChanges"
            element={
              <ProtectedRoute
                component={
                  <Layout header={false}>
                    <ProfileChanges />
                  </Layout>
                }
              />
            }
          />
          <Route
            path="settings"
            element={
              <ProtectedRoute
                component={
                  <Layout header={false}>
                    <ProfileSettings />
                  </Layout>
                }
              />
            }
          />
        </Route>

        <Route path="/events">
          <Route
            index
            element={
              <Layout header={true} footer={true}>
                <Events />
              </Layout>
            }
          />
          <Route
            path="/events/:id"
            element={
              <Layout>
                <Modal closeModal={() => {navigate(-1)}}><EventById/></Modal>
              </Layout>
            }
            />
          <Route
            path="/events/requestForReg/:type"
            element={
              <Layout>
                <RequestForReg />
              </Layout>
            }
          />
          <Route
            path="/events/selections/:type"
            element={
              <Layout>
                <Selections />
              </Layout>
            }
          />
          <Route
            path="/events/tasks/:id"
            element={
              <Layout>
                <Tasks />
              </Layout>
            }
          />
        </Route>

        <Route
          path="/login"
          element={
            <ProtectedRoute
              onlyUnAuth
              component={
                <Layout header={false} footer={false}>
                  <Login />
                </Layout>
              }
            />
          }
        />
        <Route
          path="/register/step1"
          element={
            <ProtectedRoute
              onlyUnAuth
              component={
                <Layout header={false} footer={false}>
                  <RegisterStep1 />
                </Layout>
              }
            />
          }
        />
        <Route
          path="/register/step2"
          element={
            <ProtectedRoute
              onlyUnAuth
              component={
                <Layout header={false} footer={false}>
                  <RegisterStep2 />
                </Layout>
              }
            />
          }
        />
        <Route
          path="/forgotPassword"
          element={
            <ProtectedRoute
              onlyUnAuth
              component={
                <Layout header={false} footer={false}>
                  <ForgotPassword />
                </Layout>
              }
            />
          }
        />

        <Route
          path="/newsFeed"
          element={
            <Layout>
              <News />
            </Layout>
          }>
          <Route index element={<NewsFeed />} />
          <Route path="/newsFeed/broadcasts" element={<Broadcasts />} />
          <Route path="/newsFeed/myPosts" element={<ProtectedRoute component={<MyPosts />} />} />
        </Route>

        <Route
          path="/createPost"
          element={
            <Layout header={false} footer={false}>
              <CreatePost />
            </Layout>
          }
        />
        <Route
          path="/newsFeed/comments"
          element={
            <Layout header={false}>
              <Comments />
            </Layout>
          }
        />
        <Route path="/createPost" element={<Layout header={false} footer={false}><CreatePost /></Layout>} />
        <Route path="/newsFeed/comments" element={<Layout header={false}><Comments /></Layout>} />

        <Route path="/more" element={<Layout header={true} footer={true}><More /></Layout>}/>

        <Route path="/contest" element={<Layout><Contest /></Layout>}>
          <Route index element={<ContestFeed />} />
          <Route path="/contest/videoContest" element={<VideoContest />} />
          <Route path="/contest/kids" element={<Kids />} />
        </Route>

        <Route
          path="/more"
          element={
            <Layout header={true} footer={true}>
              <More />
            </Layout>
          }
        />

        <Route
          path="/register/done"
          element={
            <Modal
              closeModal={() => {
                navigate(-2)
              }}>
              <PopUp
                title={'Регистрация прошла успешно!'}
                text={'Вам на указанную почту направлено письмо с данными для входа'}
              />
            </Modal>
          }
        />

        <Route
          path="*"
          element={
            <Layout header={true} footer={true}>
              <NotFound />
            </Layout>
          }
        />
      </Routes>
    </div>
  )
}

export default App
