import styles from './tabBar.module.css'
import { tabBarIcons } from '../../assets/icons/tab-bar-icons'
import { TabBarButton } from '../tabBarButton/tabBarButton'

export function TabBar() {
  const tabBarButtons: string[] = ['Главная', 'Лента', 'Эвенты', 'Конкурсы', 'Еще']
  const paths: string[] = ['/main', '/newsline', '/events', '/contest', '/more']

  return (
    <div className={styles.container}>
      {tabBarButtons.map((button, index) => {
        return (
          <TabBarButton icon={tabBarIcons[index]} goTo={paths[index]}>
            {button}
          </TabBarButton>
        )
      })}
    </div>
  )
}
