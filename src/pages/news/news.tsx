import React from 'react'
import styles from './news.module.css'
import { Outlet } from 'react-router-dom'
import { SubHeader } from '../../components/subHeader/subHeader'
import { TabBar } from '../../components/tabBar/tabBar'

export const News: React.FC = () => {


  return (
    <>
      <SubHeader title="Лента" />
      <TabBar />

      <div className={styles.container}>
        <Outlet />
      </div>
    </>
  )
}