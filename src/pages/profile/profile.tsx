import React from 'react'
import styles from './profile.module.css'
import { SubMenu, TLinks } from '../../components/subMenu/subMenu'
import { CompetitionCard } from '../../components/competitionCard/competitionCard'
import { SubHeader } from '../../components/subHeader/subHeader'
import { TCompetition } from '../../utils/types'

export const selectionsData: TCompetition[] = [
  {
    type: 'online',
    name: 'Онлайн отбор на соревнования',
    level: 0,
    stages: [
      {
        status: 'Завершен',
        name: 'Регистрация',
        startDate: '07.02.2024',
        endDate: '17.04.2024',
        tasksId: '001'
      },
      {
        status: 'В ожидании',
        name: 'ТОП 23 (12)',
        startDate: '07.05.2024',
        endDate: '08.06.2024',
        tasksId: '002'
      },
      {
        status: 'Завершен',
        name: 'ТОП 4 (3)',
        startDate: '14.06.2024',
        endDate: '16.06.2024',
        tasksId: '003'
      }
    ],
    description: `Покажи свой скилл по каждому направлению соревнований и попади на гранд-финал в легендарные батлы и самое масштабное событие улиц!
                  Регистрируйся на участие в конкурсе и пройди по результатам онлайн-отбора в ТОП-24 категорий про, или ТОП-12 других категорий!
                  По итогу этого этапа отбора участники, вошедшие, в ТОП-4 или ТОП-3 (в зависимости от направлений, смотри внимательно в положении) 
                  получат путевку «всё включено» (питание, проживание, проезд) на гранд-финал 22-25 августа в Ставрополь!`
  },
  {
    type: 'video',
    name: 'Видео-конкурс',
    level: 0,
    stages: [
      {
        status: 'Завершен',
        name: 'Регистрация',
        startDate: '07.02.2024',
        endDate: '17.04.2024',
        tasksId: '001'
      },
      {
        status: 'В ожидании',
        name: 'ТОП 48',
        startDate: '18.05.2024',
        endDate: '07.07.2024',
        tasksId: '001'
      },
      {
        status: 'В ожидании',
        name: 'ТОП 12',
        startDate: '14.07.2024',
        endDate: '21.08.2024',
        tasksId: '001'
      }
    ],
    description: `Покажи свое видение того, как выглядят уличная культура и спорт!
                  Найди лучшие инструменты показать самое главное и попади в ТОП-48 тех, кто получит специальное задание по созданию короткометражки.
                  Лучшие из них сформируют ТОП-12 ребят и девочек, которые поедут на гранд-финал и на месте будут выполнять финальное задание по съемке короткого клипа.`
  },
  {
    type: 'regional',
    name: 'Региональные отборы',
    startDate: '27.04.2024',
    endDate: '15.08.2024',
    stages: [
      {
        name: 'Владимирская область, Владимир',
        startDate: '25.05.24'
      },
      {
        name: 'Московская область, Дмитров',
        startDate: '14.07.24'
      },
      {
        name: 'Липецкая область, Липецк',
        startDate: '29.06.24'
      },
      {
        name: 'Челябинская область, Челябинск',
        startDate: '15.08.24'
      },
    ]
  },
  {
    type: 'national',
    name: 'Национальные отборы',
    startDate: '01.01.2024',
    endDate: '15.07.2024',
    stages: [
      {
        name: 'Франция, Бордо',
        startDate: '27.04.24'
      },
      {
        name: 'Таджикистан, Душанбе',
        startDate: '14.07.24'
      },
      {
        name: 'Аргентина, Буэнос-Айрес',
        startDate: '27.07.24'
      },
    ]
  },
  {
    type: 'final',
    name: 'Гранд-финал',
    startDate: '22.08.2024',
    endDate: '25.08.2024',
    stages: []
  }
]

export const Profile: React.FC = () => {
  const navLinks: TLinks[] = [
    { name: 'Мой профиль', url: '/profile/profileChanges' },
    { name: 'Мои посты', url: '/newsFeed/myPosts' },
    { name: 'Настройки', url: '/profile/settings' },
    { name: 'Выйти', url: '/login' }
  ]

  return (
    <>
      <SubHeader title="Профиль" />
      <div className={styles.container}>
        <SubMenu links={navLinks} />
        <div className={styles.compCards}>
          <CompetitionCard competitionData={selectionsData[0]} />
          <CompetitionCard competitionData={selectionsData[1]} />
          <CompetitionCard
            competitionData={{
              type: 'youth',
              name: 'Проекты: Конкурс Росмолодёжь. Гранты',
              url: 'https://grants.myrosmol.ru/auth/login'
            }}
          />
          <CompetitionCard competitionData={selectionsData[2]} />
          <CompetitionCard competitionData={selectionsData[3]} />
          <CompetitionCard competitionData={selectionsData[4]} />
        </div>
      </div>
    </>
  )
}
