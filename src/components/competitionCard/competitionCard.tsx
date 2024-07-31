import styles from './competitionCard.module.css'
import { Link, useNavigate } from 'react-router-dom'
import clsx from 'clsx'

type TCompetirionCardProps = {
  name: string
  url: string
  startDate?: string
  endDate?: string
  level?: number
}

export const CompetitionCard = ({
  name,
  url,
  startDate,
  endDate,
  level
}: TCompetirionCardProps): JSX.Element => {
  const navigate = useNavigate()
  function handleClick() {
    if (url.startsWith('http')) {
      window.location.href = url
    } else {
      navigate(url)
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
