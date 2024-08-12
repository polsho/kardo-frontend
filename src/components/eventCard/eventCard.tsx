import styles from './eventCard.module.css'
import { Link, useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import { Directions } from '../../utils/types'
import { formatDateToDayMonth } from '../../utils/utils'
import { Button } from '../button/button'

export enum EventType {
  'ALL',
  'VIDEO',
  'GRANT',
  'DIALOG',
  'LEISURE',
  'CULTURE',
  'STREET_CULTURE_SPORT',
  'ENTERTAINMENT',
  'COMPETITION',
  'EXCURSION'
}

type Direction = {
  id: number
  direction: string | Directions
}

export type TEvent = {
  id: string
  name: string
  type: string | EventType
  directions: string | Direction[]
  date: string
  description: string
  location: string
  time: string
}

type TEventCardProps = {
  eventData: Omit<TEvent, 'type'>
  eventId: string
  isDetailed: boolean
}

export const EventCard = ({ eventData, eventId, isDetailed }: TEventCardProps): JSX.Element => {
  const { name, directions, date, description, location, time } = eventData

  const navigate = useNavigate()

  return (
    <>
      <Link to={`/events/${eventId}`}>
        <div className={clsx(styles.container, { [styles.detailed]: isDetailed }, 'text_type_main-default')}>
          <div className={clsx(styles.date, 'text_type_main-default-bold')}>{formatDateToDayMonth(date)}</div>
          <div className={clsx(styles.name, 'text_type_secondary_main')}>{name}</div>
          <div>
            <span className="text_type_main-default-bold">Направления: </span>
            {typeof directions === 'string'
              ? 'Все направления'
              : `${directions.forEach(d => {
                  return `${d.direction}, `
                })}`}
          </div>
          {isDetailed && <div>{description}</div>}
          <div>
            <span className="text_type_main-default-bold">Локация: </span>
            {location}
          </div>
          <div>
            <span className="text_type_main-default-bold">Время: </span>
            {time}
          </div>
        </div>
      </Link>
      {isDetailed && (
        <button
          className={clsx(styles.button, 'text_type_secondary_main')}
          type="button"
          onClick={() => {
            navigate('/profile')
          }}>
          Зарегистрироваться
        </button>
      )}
    </>
  )
}
