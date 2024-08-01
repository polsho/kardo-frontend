import React from 'react'
import styles from './newsFeed.module.css'
import { Post } from '../../components/post/post'
import linkPhoto from '../../assets/images/image-post.png'
import linkVideo from '../../assets/images/video-post.png'

export const NewsFeed: React.FC = () => {

  // const iconProfile: string = iconProfile; Добавить переменную, когда апи будут готовы

  const posts = [
    {
      url: linkPhoto,
      text: 'Длинное название для поста, которое можно сделать в две строчки, но не больше',
      name: 'Иван Иванов1',
      date: '19.07.2024',
      category: 'Kickscootering'
    },
    {
      url: linkVideo,
      text: 'Длинное название для поста, которое можно сделать в две строчки, но не больше',
      name: 'Иван Иванов2',
      date: '19.07.2024',
      category: 'Kickscootering'
    }
  ]


  return (
    <div className={styles.container}>

      <div className={styles.posts}>
        {
          posts.map(post => <Post url={post.url} name={post.name} date={post.date} category={post.category} text={post.text} />)
        }

      </div>
    </div>
  )
}