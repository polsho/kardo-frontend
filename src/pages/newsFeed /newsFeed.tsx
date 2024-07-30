import React from "react";
import styles from "./newsFeed.module.css";
import { TabBar } from '../../components/tabBar/tabBar'
import { Header } from '../../components/header/header'
import { SubMenu } from '../../components/subMenu/subMenu'
import { useNavigate } from 'react-router-dom'

export const NewsFeed: React.FC = () => {

  const navigate = useNavigate();

  return (
    <>
      <Header />
      {/*<SubMenu url={/welcomePage}>Лента</SubMenu>*/}
      <div className={styles.tabs}>
        <div className={styles.container} >
          <span className="text_type_main-default">Лента</span>
          <div className={styles.border_line}></div>
        </div>
        <div className={styles.container}>
          <span className="text_type_main-default">Трансляции</span>
          <div className={styles.border_line}></div>
        </div>
        <div className={styles.container}>
          <span className="text_type_main-default">Мои посты</span>
          <div className={styles.border_line}></div>
        </div>
      </div>
      <p className={styles.heading}>Error 404</p>
      <TabBar />
    </>
  )
}