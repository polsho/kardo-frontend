import styles from './eventById.module.css'
import { Link, useParams } from 'react-router-dom'
import clsx from 'clsx'
import { Directions } from '../../utils/types'
import { formatDateToDayMonth } from '../../utils/utils'
import { eventsId, eventsWithId } from '../../pages/events/events'
import { Preloader } from '../preloader/preloader'
import { useContext } from 'react'


export const EventById = (): JSX.Element => {

  const param = useParams();
  const context = useContext(eventsId)

  const eventId = param.id;
  const eventData = eventsWithId.find((e => {e.id === eventId}))

  if (!eventData) {
    return <Preloader/>
  }
  const { name, directions, date, location, time } = eventData

  return (
    <Link to={`/events/${eventId}`}>
      <div className={clsx(styles.container, 'text_type_main-default')}>
        <div className={clsx(styles.date, 'text_type_main-default-bold')}>{formatDateToDayMonth(date)}</div>
        <div className={clsx(styles.name, 'text_type_secondary_main')}>{name}</div>
        <div>
          <span className="text_type_main-default-bold">Направления: </span>
          {typeof(directions) === 'string' ? 'Все направления' : `${directions.forEach((d) => {return `${d.direction}, `})}`}
        </div>
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
  )
}
