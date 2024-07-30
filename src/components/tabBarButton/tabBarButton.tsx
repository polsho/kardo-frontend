import styles from './tabBarButton.module.css'
import clsx from 'clsx'
import { useLocation, useNavigate } from 'react-router-dom'

export type TTabBarButtonProps = {
  children: string
  goTo: string;
}

export function TabBarButton({ children, goTo }: TTabBarButtonProps) {
  const location = useLocation()
  const navigate = useNavigate()

  function handleClick() {
    navigate(goTo)
  }

  return (
    <button
      className={clsx(styles.button, {
        [styles.button_active]: location.pathname.includes(goTo) ? true : false
      })}
      onClick={handleClick}>
      {children}
    </button>
  )
}