import styles from './tabBar.module.css'
import { tabBarIcons } from '../../assets/icons/tab-bar-icons'
import { v4 as uuidv4 } from 'uuid';
import { TabBarButton } from '../tabBarButton/tabBarButton'

export function TabBar() {
  const tabBarButtons: string[] = ['Лента', 'Трансляции', 'Мои посты']
  const paths: string[] = ['/newsFeed', '/broadcasts', '/myPosts']

  return (
    <div className={styles.container}>
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