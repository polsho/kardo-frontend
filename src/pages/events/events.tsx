import React, { useContext } from 'react'
import styles from './events.module.css'
import { SubHeader } from '../../components/subHeader/subHeader'
import { Select } from '../../components/select/select'
import { EventCard, TEvent } from '../../components/eventCard/eventCard'
import { Directions } from '../../utils/types'
import { v4 as uuidv4 } from 'uuid'
import { createContext } from 'react'

const events: TEvent[] = [
  {
    name: 'Главное событие дня: Церемония открытия Международной Конкурс-Премии "Кардо"',
    type: 'CULTURE',
    directions: 'ALL',
    date: '2024-08-22',
    description: `Шоу «Город КАРДО» Присоединяйся к главному герою в его путешествии по городу КАРДО и узнай, как одна мечта может изменить мир! 
                  Это шоу для всех, кто любит мечтать, творить и жить на полную!`,
    location: 'Главная сцена. Площадь Ленина',
    time: '19:00 - 22:00'
  },
  {
    name: 'Выставка автомобилей',
    type: 'LEISURE',
    directions: 'ALL',
    date: '2024-08-22',
    description: `Выставка машин — это уникальная возможность окунуться в историю и культуру автомобильного мира, увидеть легендарные модели и оценить передовые технологии. 
                  Не упустите шанс насладиться красотой и мощью этих потрясающих автомобилей!`,
    location: 'Площадка Граффити',
    time: '10:00 - 22:00'
  },
  {
    name: 'Выставка современной живописи и графики "Улицы сегодня"',
    type: 'LEISURE',
    directions: 'ALL',
    date: '2024-08-22',
    description: `Эта выставка – не просто собрание картин, а глубокий диалог о России и ее культурном многообразии. 
                  Цель выставки:
                * Привлечь внимание широкой аудитории к творчеству российских художников.
                * Продемонстрировать разнообразие стилей и техник современного искусства.
                * Показать влияние уличной жизни на творчество художников.
                * Подчеркнуть важность сохранения культурных ценностей всех народов России
                Значение выставки:
                Она позволяет понять, как уличная культура влияет на творчество, и как искусство может отражать многообразие жизни нашей страны.
                В выставке принимают участие художники из разных регионов Российской Федерации, прошедшие конкурсный отбор.`,
    location: 'Контейнер на площадке Скейтбординга и Воркаута',
    time: '10:00 - 22:00'
  },
  {
    name: 'Экскурсии по территории Конкурс-Премии "Кардо"',
    type: 'LEISURE',
    directions: 'ALL',
    date: '2024-08-22',
    description: `Добро пожаловать на пешую экскурсию по месту проведения Гранд-финала Конкурс-премии «КАРДО»! 
                  Каждый желающий может присоединиться и узнать о Конкурс-премии «КАРДО» еще больше интересной информации, пройтись по площадкам Гранд-финала.
                  Периодичность экскурсии — каждые 30 минут`,
    location: 'Зона регистрации',
    time: '13:00 - 15:00'
  }
]


export const eventsWithId = events.map(event => {
  return { ...event, id: uuidv4() }
})
export const eventsId = createContext(eventsWithId)

export const Events: React.FC = () => {
  return (
    <>
      <SubHeader title="Что Вас ждет?" />
      <div className={styles.container}>
        <form className={styles.selects} action="" id="filter">
          <Select
            value={''}
            onChange={() => {}}
            options={['Направления']}
            id="filter"
            style={'rectangle'}></Select>
          <Select
            value={''}
            onChange={() => {}}
            options={['Программа']}
            id="filter"
            style={'rectangle'}></Select>
        </form>
        <ul className={styles.eventCardsList}>
          {eventsWithId.map(event => {
            return (
              <li key={event.id}>
                <EventCard eventId={event.id} eventData={event} />
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
