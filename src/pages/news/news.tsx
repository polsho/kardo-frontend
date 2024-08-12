import React from 'react'
import styles from './news.module.css'
import { Outlet } from 'react-router-dom'
import { SubHeader } from '../../components/subHeader/subHeader'
import { TabBar } from '../../components/tabBar/tabBar'

export const News: React.FC = () => {
  const tabBarButtons: string[] = ['Лента', 'Трансляции', 'Мои посты']
  const paths: string[] = ['/newsFeed', '/newsFeed/broadcasts', '/newsFeed/myPosts']

  return (
    <>
      <SubHeader title="Лента" />
      <TabBar buttons={tabBarButtons} paths={paths}/>

      <div className={styles.container}>
        <Outlet />
      </div>
    </>
  )
}