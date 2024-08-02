import React from 'react'
import styles from './newsFeed.module.css'
import { Post } from '../../components/post/post'
import linkPhoto from '../../assets/images/image-post.png'
import linkVideo from '../../assets/images/video-post.png'
import clsx from 'clsx'

export type TPosts = {
  url?: string,
  text?: string,
  name?: string,
  date?: string,
  category?: string,
  id?: number
}

export const NewsFeed: React.FC = () => {

  // const iconProfile: string = iconProfile; Добавить переменную, когда апи будут готовы

  const Allposts = [
    {
      url: linkPhoto,
      text: 'Длинное название для поста, которое можно сделать в две строчки, но не больше',
      name: 'Иван Иванов',
      date: '19.07.2024',
      category: 'Kickscootering',
      id: 1
    },
    {
      url: linkVideo,
      text: 'Длинное название для поста, которое можно сделать в две строчки, но не больше',
      name: 'Мария Иванова',
      date: '01.08.2024',
      category: 'Parkour',
      id: 2
    },
    {
      url: linkPhoto,
      text: 'Длинное название для поста, которое можно сделать в две строчки, но не больше',
      name: 'Мария Иванова',
      date: '01.08.2024',
      category: 'Parkour',
      id: 3
    },
    {
      url: linkVideo,
      text: 'Длинное название для поста, которое можно сделать в две строчки, но не больше',
      name: 'Мария Иванова',
      date: '01.08.2024',
      category: 'Parkour',
      id: 4
    },
    {
      url: linkVideo,
      text: 'Длинное название для поста, которое можно сделать в две строчки, но не больше',
      name: 'Улицы России - трансляция',
      date: '01.08.2024',
      category: 'Hip-hop',
      id: 5
    },
    {
      url: linkVideo,
      text: 'Длинное название для поста, которое можно сделать в две строчки, но не больше',
      name: 'Мария Иванова',
      date: '01.08.2024',
      category: 'BMX',
      id: 6
    },
    {
      url: linkVideo,
      text: 'Длинное название для поста, которое можно сделать в две строчки, но не больше',
      name: 'Мария Иванова',
      date: '01.08.2024',
      category: 'Djing',
      id: 7
    },
    {
      url: linkVideo,
      text: 'Длинное название для поста, которое можно сделать в две строчки, но не больше',
      name: 'Мария Иванова',
      date: '01.08.2024',
      category: 'Workout',
      id: 8
    }

  ]

  const filteredPosts: TPosts[] = [];

  function filterCategory () {

    Allposts.filter((item) => {
      if (!filteredPosts.some((element) => element.category === item.category)) {
        filteredPosts.push(item);
        return filteredPosts;
      }
    });
  }

  filterCategory ();

  function filterPosts () {

  }

  return (
    <>
      <div className={clsx(styles.category_container, 'text_type_main-default')}>
        <div className={styles.category}>Все</div>

        {filteredPosts.map(post => <div className={styles.category} onClick={filterPosts} key={post.id}>{post.category}</div>)}
      </div>

      <div className={styles.container}>
        <div className={styles.posts}>
          {
            Allposts.map(post => <Post url={post.url} name={post.name} date={post.date} category={post.category}
                                    text={post.text} key={post.id}/>)
          }
        </div>
      </div>
    </>
  )
}