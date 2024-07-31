import React from 'react'
import styles from './newsFeed.module.css'
import { Post } from '../../components/post/post'
import linkPhoto from '../../assets/images/image-post.png'
import linkVideo from '../../assets/images/video-post.png'

export const NewsFeed: React.FC = () => {

  // const iconProfile: string = iconProfile; Добавить переменную, когда апи будут готовы
  const photo = linkPhoto;
  const video = linkVideo;
  const text = "Длинное название для поста, которое можно сделать в две строчки, но не больше";
  const name = "Иван Иванов";
  const date = "19.07.2024";
  const category = "Kickscootering";

  return (
    <div className={styles.container}>
      <p className={styles.heading}>Общая лента новостей</p>

      <div className={styles.posts}>
        <Post video={video} text={text} name={name} date={date} category={category}/>
        <Post photo={photo} text={text} name={name} date={date} category={category}/>
        <Post photo={photo} text={text} name={name} date={date} category={category}/>
      </div>
    </div>
  )
}