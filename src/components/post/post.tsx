import React from 'react'
import styles from './post.module.css'
import iconProfile from '../../assets/images/photo-profile.png'
import clsx from 'clsx'
import like from '../../assets/icons/like.svg'
import dislike from '../../assets/icons/dislike.svg'

type TPost = {
  photo?: string,
  video?: string,
  text?: string,
  name?: string,
  date?: string,
  category?: string
}

export const Post = ({photo, video, text, name, date, category}: TPost): JSX.Element => {

  return (
    <>
        <div className={styles.post}>
          <div className={clsx(styles.heading, "text_type_main-default")}>
            <div className={styles.info}>
              <img className={styles.icon_profile} src={iconProfile} alt="photo User" />
              <span>{name}</span>
            </div>
            <span>{date}</span>
          </div>

          {photo ? <img className={styles.media} src={photo} alt="image post" /> :
            <img className={styles.media} src={video} alt="video post" />}

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