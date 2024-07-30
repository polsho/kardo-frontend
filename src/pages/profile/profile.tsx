import React from 'react'
import styles from './profile.module.css'
import { useNavigate } from 'react-router-dom'
import { SubMenu, TLinks } from '../../components/subMenu/subMenu'
import { CompetitionCard } from '../../components/competitionCard/competitionCard'
import { SubHeader } from '../../components/subHeader/subHeader'

export const Profile: React.FC = () => {
  const navigate = useNavigate()

  const navLinks: TLinks[] = [
    { name: 'Мой профиль', url: '/profile/profileChanges' },
    { name: 'Мои посты', url: '/newsline/myPosts' },
    { name: 'Настройки', url: '/profile/settings' },
    { name: 'Выйти', url: '/logout' }
  ]

  return (
    <>
      <SubHeader title="Профиль" />
      <div className={styles.container}>
        <SubMenu links={navLinks} />
        <div className={styles.compCards}>
          <CompetitionCard name="Онлайн отбор на соревнования" url="#" level={0} />
          <CompetitionCard name="Видео-конкурс" url="#" level={0} />
          <CompetitionCard name="Проекты: Конкурс Росмолодёжь. Гранты" url="#" />
          <CompetitionCard
            name="Региональные  отборы"
            url="#"
            startDate="27.04.2024"
            endDate="10.08.2024" />
          <CompetitionCard
            name="Национальные  отборы"
            url="#"
            startDate="01.01.2024"
            endDate="27.07.2024" />
          <CompetitionCard
            name="Гранд-финал"
            url="#"
            startDate="22.08.2024"
            endDate="25.08.2024" />
        </div>
      </div>
    </>
  )
}