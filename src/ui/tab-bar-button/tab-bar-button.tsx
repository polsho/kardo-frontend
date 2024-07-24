import React from 'react'
import './tab-bar-button.css'
import { TTabBarButtonProps } from './types'

export function TabBarButton({ icon, title, onClick }: TTabBarButtonProps) {
  return (
    <button className="tab-bar-button" onClick={onClick}>
      <img src={icon} alt="иконка" className="tab-bar-button__icon" />
      <div className="text_type_main-small">{title}</div>
    </button>
  )
}
