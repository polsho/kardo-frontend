import styles from './stageCard.module.css'
import { Link, useNavigate } from 'react-router-dom'
import clsx from 'clsx'

type TStageStatus = 'Завершен' | 'В ожидании'

type TStageCardProps = {
  status: TStageStatus
  name: string
  startDate?: string
  endDate?: string
  tasksId?: string
}

export const StageCard = ({ status, name, startDate, endDate, tasksId }: TStageCardProps): JSX.Element => {
  const navigate = useNavigate()

  return (
    <div className={styles.container}>
      <div className={clsx(styles.status, 'text_type_main-default-bold')}>{status}</div>
      <div className={clsx(styles.title, 'text_type_secondary_large')}>{name}</div>

      <div className={clsx(styles.dates, 'text_type_secondary_small')}>
        <span>Начало: {startDate}</span>
        <span>Конец: {endDate}</span>
      </div>
      <Link className={clsx(styles.linkToTask, 'text_type_main-default')} to={`tasks/${tasksId}`}>Посмотреть задание</Link>
    </div>
  )
}
