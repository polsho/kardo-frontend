import React from 'react'
import styles from './profileSettings.module.css'
import { SubMenu, TLinks } from '../../components/subMenu/subMenu'
import { SubHeader } from '../../components/subHeader/subHeader'

export const ProfileSettings: React.FC = () => {

  const navLinks: TLinks[] = [
    { name: 'Язык', url: '#' },
    { name: 'Уведомления', url: '#' },
    { name: 'Обратная связь', url: '#' }
  ]

  return (
    <>
      <SubHeader title='Профиль'/>
      <div className={styles.container}>
        <SubMenu links={navLinks} />
      </div>
    </>
  )
}
