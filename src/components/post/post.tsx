import React from "react";
import styles from "./post.module.css";
import photo from "../../assets/icons/photo-post.png"
import video from "../../assets/icons/image-post.png"

export const Post: React.FC = () => {

  return (
    <>
      <div className={styles.posts}>

        <div className={styles.post}>
          <div className={styles.post_heading}>
            <img className={styles.icon_profile} src={photo} alt='photo User' />
            <span>Иван Иванов</span>
            <span>19.07.2024</span>
          </div>
          <img className={styles.video} src={video} alt="video post" />
        </div>

        <div className={styles.post}>
        <div className={styles.post_heading}>
            <img className={styles.icon_profile} src={photo} alt='photo User' />
            <span>Иван Иванов</span>
            <span>19.07.2024</span>
          </div>
        </div>

        <div className={styles.post}>
          <div className={styles.post_heading}>
            <img className={styles.icon_profile} src={photo} alt='photo User' />
            <span>Иван Иванов</span>
            <span>19.07.2024</span>
          </div>
        </div>

      </div>
    </>
  )
}