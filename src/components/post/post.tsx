import React from 'react'
import styles from './post.module.css'
import iconProfile from '../../assets/images/photo-profile.png'
import clsx from 'clsx'
import like from '../../assets/icons/like.svg'
import dislike from '../../assets/icons/dislike.svg'

export type TPost = {
  url?: string,
  text?: string,
  name?: string,
  date?: string,
  category?: string
}

export const Post: React.FC<TPost> = ({url, text, name, date, category}: TPost) => {

  return (
    <>
        <div className={styles.post}>
          <div className={clsx(styles.heading, "text_type_main-default")}>
            <div className={styles.info}>
              <img className={styles.icon_profile} src={iconProfile} alt="фото пользователя" />
              <span>{name}</span>
            </div>
            <span>{date}</span>
          </div>

          {url ? <img className={styles.media} src={url} alt="картинка поста" /> :
            <img className={styles.media} src={url} alt="видео поста" />}

          <span className={clsx(styles.description, 'text_type_main-large')}>{text}</span>

          <div className={clsx(styles.bottom_container, 'text_type_main-default')}>
            <div className={styles.category}>{category}</div>

            <div className={styles.reactions}>

              <div className={clsx(styles.like_container, 'text_type_main-large')}>
                <img src={like} alt="like"/>
                <span>21</span>
              </div>

              <div className={clsx(styles.dislike_container, 'text_type_main-large')}>
                <img src={dislike} alt="dislike" />
                <span>18</span>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}