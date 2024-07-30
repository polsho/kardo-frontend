import React from "react";
import styles from "./newsFeed.module.css";
import { Post } from '../../components/post/post'

export const NewsFeed: React.FC = () => {

  return (
    <div className={styles.container}>
      <p className={styles.heading}>Общая лента новостей</p>
      <Post />
    </div>
  )
}