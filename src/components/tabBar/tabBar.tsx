import styles from './tabBar.module.css'
import { v4 as uuidv4 } from 'uuid';
import { TabBarButton } from '../tabBarButton/tabBarButton'
import { JSX } from 'react/jsx-runtime'

export type TTabBarProps = {
  buttons: string[],
  paths: string[]
}

export function TabBar ({buttons, paths} : TTabBarProps): JSX.Element {

  return (
    <div className={styles.tabs}>
      {buttons.map((button, index) => {
        return (
          <TabBarButton goTo={paths[index]} key={uuidv4()}>
            {button}
          </TabBarButton>
        )
      })}
    </div>
  )
}