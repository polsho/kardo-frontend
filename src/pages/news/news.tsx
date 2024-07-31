import React from 'react'
import styles from './news.module.css'
import { Footer } from '../../components/footer/footer'
import { Header } from '../../components/header/header'
import { Outlet, useNavigate } from 'react-router-dom'
import { SubHeader } from '../../components/subHeader/subHeader'
import { TabBar } from '../../components/tabBar/tabBar'

export const News: React.FC = () => {

  const navigate = useNavigate()

  return (
    <>
      <Header />
      <SubHeader title="Лента" />
      <TabBar />

      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}