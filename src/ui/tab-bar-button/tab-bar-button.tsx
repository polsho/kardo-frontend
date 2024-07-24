import React from 'react'
import styles from './tab-bar-button.module.css'
import { TTabBarButtonProps } from './types'

export function TabBarButton({ icon, title, onClick }: TTabBarButtonProps) {
  return (
    <button className={styles.tabBarButton} onClick={onClick}>
      <img src={icon} alt="иконка" className="tab-bar-button__icon" />
      <div className="text_type_main-small">{title}</div>
    </button>
  )
}
