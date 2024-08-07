import styles from './competitionCard.module.css'
import { Link, useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import { TCompetition } from '../../utils/types'

type TCompetitionCardProps = {
  competitionData: Omit<TCompetition, "stages">
  // name: string
  // url: string
  // startDate?: string
  // endDate?: string
  // level?: number
}

export const CompetitionCard = ({
  // name,
  // url,
  // startDate,
  // endDate,
  // level
  competitionData
}: TCompetitionCardProps): JSX.Element => {
  const navigate = useNavigate()

  const {type, name, url, startDate, endDate, level } = competitionData

  function handleClick() {
    if (url?.startsWith('http')) {
      window.open(url, '_blank')
    } else {
      navigate(`/events/selections/${type}`)
    }
  }
  return (
    <div className={styles.container} onClick={handleClick}>
      <div className={clsx(styles.title, 'text_type_secondary_small')}>{name}</div>

      {typeof startDate !== 'undefined' && (
        <div className={clsx(styles.dates, 'text_type_secondary_small')}>
          <span>Начало: {startDate}</span>
          <span>Конец: {endDate}</span>
        </div>
      )}

      {typeof level !== 'undefined' && (
        <div className={clsx(styles.level, 'text_type_secondary_small')}>
          <span>Уровень {level}%</span>
        </div>
      )}
    </div>
  )
}
