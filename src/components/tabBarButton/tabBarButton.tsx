import styles from './tabBarButton.module.css'
import clsx from 'clsx'
import { useLocation, useNavigate } from 'react-router-dom'
import React from 'react'

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
    <div className={styles.container}>
      <button
        className={clsx(styles.button, 'text_type_main-default', {
          [styles.button_active]: location.pathname === goTo ? true : false
        })}
        onClick={handleClick}>
        {children}
        <div className={styles.border_line}></div>
      </button>
    </div>
  )
}