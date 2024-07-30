import React from "react";
import styles from "./newsFeed.module.css";
import { Footer } from '../../components/footer/footer'
import { Header } from '../../components/header/header'
import { useNavigate } from 'react-router-dom'
import { SubHeader } from '../../components/subHeader/subHeader'
import { TabBar } from '../../components/tabBar/tabBar'

export const NewsFeed: React.FC = () => {

  const navigate = useNavigate();

  return (
    <>
      <Header />
      <SubHeader title="Лента" />
      <TabBar/>

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
      <p className={styles.heading}>Лента новостей</p>
      <Footer />
    </>
  )
}