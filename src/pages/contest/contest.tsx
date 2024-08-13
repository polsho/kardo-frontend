import React from "react";
import styles from "./contest.module.css";
import { SubHeader } from '../../components/subHeader/subHeader'
import { TabBar } from '../../components/tabBar/tabBar'
import { Outlet } from 'react-router-dom'

export const Contest: React.FC = () => {

  const tabBarButtons: string[] = ['Премия', 'Видеоконкурс', 'Дети'];
  const paths: string[] = ['/contest', '/contest/videoContest', '/contest/kids']

  return (
    <>
      <SubHeader title="Конкурсы" />
      <TabBar buttons={tabBarButtons} paths={paths}/>

      <div className={styles.container}>
        <Outlet />
      </div>
    </>
  )
}