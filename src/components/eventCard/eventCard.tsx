import styles from './eventCard.module.css'
import { Link, useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import { TStageStatus, TStage } from '../../utils/types'

export type TEvent = {
    name: string,
    type: "ALL",
    directions: [
      {
        id: number,
        direction: "PARKOUR"
      }
    ],
    date: string,
    description: string
}

type TEventCardProps = {
  eventData: TEvent,
  eventId: string
}

export const EventCard = ({eventData, eventId }: TEventCardProps): JSX.Element => {

  const {name, type, directions, date, description} = eventData
  const navigate = useNavigate()

  return (
    <div className={styles.container}>
      <div className={clsx(styles.status, 'text_type_main-default-bold')}>{status}</div>
      <div className={clsx(styles.title, 'text_type_secondary_large')}>{name}</div>

      <div className={clsx(styles.dates, 'text_type_secondary_small')}>
        <span>Начало: </span>
        <span>Конец: </span>
      </div>
      <div className={clsx(styles.link)}>
      <Link to={`/events/tasks/${eventId}`}>
        <span className={clsx(styles.linkToTask, 'text_type_main-default')}>
          {`Посмотреть задание ⟶`}
        </span>
      </Link>
      </div>
    </div>
  )
}
