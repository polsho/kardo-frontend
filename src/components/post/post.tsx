import React, { useState } from 'react'
import styles from './post.module.css'
import iconProfile from '../../assets/images/photo-profile.png'
import clsx from 'clsx'
import like from '../../assets/icons/like.svg'
import dislike from '../../assets/icons/dislike.svg'
import comments from '../../assets/icons/comments.svg'
import settings from '../../assets/icons/nav-bar.svg'
import bin from '../../assets/icons/delete.svg'

export type TPost = {
  url?: string,
  text?: string,
  name?: string,
  date?: string,
  category?: string
}

export const Post: React.FC<TPost> = ({url, text, name, date, category}: TPost) => {

  const [isActive, setIsActive] = useState(false);

  const toggleButton = (): void => {
    if (!isActive) {
      setIsActive(true);
      console.log(1);
    } else {
      setIsActive(false);
      console.log(2);
    }
  }

  const getActiveClass = ({isActive} : {isActive: boolean}) => isActive ? styles.active : styles.inactive;

  return (
    <>
      <button className={clsx(styles.button, getActiveClass,  'text_type_main-large')}>
        <img src={bin} alt="иконка корзина" />
        Удалить публикацию
      </button>

      <div className={styles.post}>
        <div className={clsx(styles.heading, 'text_type_main-default')}>
          <div className={styles.info}>
            <img className={styles.icon_profile} src={iconProfile} alt="фото пользователя" />
              <span>{name}</span>
            </div>

            <div className={styles.info} onClick={(evt) => toggleButton()
            }>
              <span className={styles.date}>{date}</span>
              <img src={settings} alt="настройки" />
            </div>
          </div>

          {url ? <img className={styles.media} src={url} alt="картинка поста" /> :
            <img className={styles.media} src={url} alt="видео поста" />}

          <span className={clsx(styles.description, 'text_type_main-large')}>{text}</span>

          <div className={clsx(styles.bottom_container, 'text_type_main-default')}>
            <div className={styles.category}>{category}</div>

            <div className={styles.reactions}>

              <div className={clsx(styles.like_container, styles.actions_container, 'text_type_main-large')}>
                <img src={like} alt="like" />
                <span>21</span>
              </div>

              <div className={clsx(styles.dislike_container, styles.actions_container, 'text_type_main-large')}>
                <img src={dislike} alt="dislike" />
                <span>18</span>
              </div>

              <div className={clsx(styles.dislike_container, styles.actions_container, 'text_type_main-large')}>
                <img src={comments} alt="comments" />
                <span>18</span>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}