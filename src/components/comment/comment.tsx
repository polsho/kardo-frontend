import React, { useState } from 'react'
import styles from './comment.module.css'
import clsx from 'clsx'
import bin from '../../assets/icons/delete.svg'
import iconProfile from '../../assets/images/photo-profile.png'
import settings from '../../assets/icons/nav-bar.svg'
import like from '../../assets/icons/like.svg'
import dislike from '../../assets/icons/dislike.svg'
import { TComment } from '../../pages/comments/comments'

export const Comment: React.FC<TComment> = ({ text, name, date }: TComment) => {

  const [isActiveDeleteButton, setIsActiveDeleteButton] = useState(false)

  return (
    <>
      <div className={styles.comment}>
        <button className={clsx(styles.delete_button, isActiveDeleteButton && styles.active)}>
          <img src={bin} alt="иконка корзина" />
          <span className={clsx(styles.button_text, 'text_type_main-large')}>Удалить комментарий</span>
        </button>

        <div className={clsx(styles.heading, 'text_type_main-default')}>
          <div className={styles.info}>
            <img className={styles.icon_profile} src={iconProfile} alt="фото пользователя" />
            <span>{name}</span>
          </div>

          <div className={styles.info}>
            <span className={styles.date}>{date}</span>
            <div onClick={() => setIsActiveDeleteButton(!isActiveDeleteButton)}>
              <img src={settings} alt="настройки" />
            </div>
          </div>
        </div>

        <span className={clsx(styles.description, 'text_type_main-large')}>{text}</span>

        <div className={clsx(styles.bottom_container, 'text_type_main-default')}>

          <div className={styles.reactions}>

            <div className={clsx(styles.like_container, styles.actions_container, 'text_type_main-large')}>
              <img src={like} alt="like" />
              <span>21</span>
            </div>

            <div className={clsx(styles.dislike_container, styles.actions_container, 'text_type_main-large')}>
              <img src={dislike} alt="dislike" />
              <span>18</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}