import React from 'react'
import styles from './tab-bar-button.module.css'
import { TTabBarButtonProps } from './types'
import clsx from 'clsx'
import { useLocation, useNavigate } from 'react-router-dom'

export function TabBarButton({ children, icon, goTo }: TTabBarButtonProps) {
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
      <img src={icon} alt="иконка" className={styles.icon} />
      {children}
    </button>
  )
}
