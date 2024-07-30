import styles from './tabBar.module.css'
import { v4 as uuidv4 } from 'uuid';
import { TabBarButton } from '../tabBarButton/tabBarButton'

export function TabBar() {
  const tabBarButtons: string[] = ['Лента', 'Трансляции', 'Мои посты']
  const paths: string[] = ['/newsFeed', '/newsFeed/broadcasts', '/newsFeed/myPosts']

  return (
    <div className={styles.tabs}>
      {tabBarButtons.map((button, index) => {
        return (
          <TabBarButton goTo={paths[index]} key={uuidv4()}>
            {button}
          </TabBarButton>
        )
      })}
    </div>
  )
}