import React from "react";
import styles from "./videoContest.module.css";
import clsx from 'clsx'
import { Ticker } from '../../components/ticker/ticker'
import linkVideo from '../../assets/images/video-post.png'

export const VideoContest: React.FC = () => {

  return (
    <div className={styles.page_container}>

      <h1 className={clsx(styles.title, 'text_type_heading-main')}>Видеоконкурс</h1>

      <img className={styles.media} src={linkVideo} alt="видео поста" />

      <div className="element_beyond_padding">
        <Ticker text="улица начинается здесь" />
      </div>
    </div>
  )
}