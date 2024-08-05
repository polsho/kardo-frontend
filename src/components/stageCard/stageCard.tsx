import styles from './stageCard.module.css'
import { Link, useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import { TStageStatus, TStage } from '../../utils/types'

type TStageCardProps = {
  stageData: TStage
}

export const StageCard = ({ stageData }: TStageCardProps): JSX.Element => {

  const {status, name, startDate, endDate, tasksId} = stageData
  const navigate = useNavigate()

  return (
    <div className={styles.container}>
      <div className={clsx(styles.status, 'text_type_main-default-bold')}>{status}</div>
      <div className={clsx(styles.title, 'text_type_secondary_large')}>{name}</div>

      <div className={clsx(styles.dates, 'text_type_secondary_small')}>
        <span>Начало: {startDate}</span>
        <span>Конец: {endDate}</span>
      </div>
      <div className={clsx(styles.link)}>
      <Link to={`/tasks/${tasksId}`}>
        <span className={clsx(styles.linkToTask, 'text_type_main-default')}>
          {`Посмотреть задание ⟶`}
        </span>
      </Link>
      </div>
    </div>
  )
}
