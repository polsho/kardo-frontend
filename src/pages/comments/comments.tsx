import React, { useState } from 'react'
import styles from './comments.module.css'
import { SubHeader } from '../../components/subHeader/subHeader'
import send from '../../assets/icons/icon-send.svg'
import { Comment } from '../../components/comment/comment'

export type TComment = {
  text?: string,
  name?: string,
  date?: string,
  id?: number
}

export const Comments: React.FC = () => {

  const [comment, setComment] = useState('')

  const allComments = [
    {
      text: 'Длинное название для поста, которое можно сделать в три строчки, но не больше',
      name: 'Мария Марьина',
      date: '19.07.2024',
      id: 1
    },
    {
      text: 'Длинное название для поста, которое можно сделать в три строчки, но не больше',
      name: 'Сергей Сергеев',
      date: '01.08.2024',
      id: 2
    },
    {
      text: 'Длинное название для поста, которое можно сделать в три строчки, но не больше',
      name: 'Сергей Сергеев',
      date: '01.08.2024',
      id: 3
    },
    {
      text: 'Длинное название для поста, которое можно сделать в три строчки, но не больше',
      name: 'Мария Марьина',
      date: '19.07.2024',
      id: 4
    },
    {
      text: 'Длинное название для поста, которое можно сделать в три строчки, но не больше',
      name: 'Сергей Сергеев',
      date: '01.08.2024',
      id: 5
    },
    {
      text: 'Длинное название для поста, которое можно сделать в три строчки, но не больше',
      name: 'Сергей Сергеев',
      date: '01.08.2024',
      id: 6
    }
  ]

  return (
    <div className={styles.page_container}>
      <SubHeader title={'Комментарии'} />

      <div className={styles.comments}>
        {
          allComments.map(comment => <Comment name={comment.name} date={comment.date} text={comment.text}
                                              key={comment.id} />)
        }
      </div>

      <div className={styles.input_container}>
        <input className={styles.input} type="text" name="comment" required placeholder="Ваш комментарий"
               value={comment}
               onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                 setComment(event.target.value)
               }}
        />

        <button className={styles.button} onClick={() => {
        }}>
          <img src={send} alt="иконка отправить" />
        </button>
      </div>
    </div>
  )
}