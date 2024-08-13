import styles from './stageCardFeed.module.css'
import clsx from 'clsx'

export type TStageCardFeedProps = {
  startDate?: string,
  endDate?: string,
  description: string,
  number?: string
}

export const StageCardFeed = ({startDate, endDate, description, number}: TStageCardFeedProps): JSX.Element => {

  return (
    <div className={clsx(styles.container_stage, 'text_type_main-default')}>
      <div className={styles.title_container}>
        <span className={clsx(styles.title_stage, 'text_type_secondary_main')}>{number}</span>
        {startDate && <span className={clsx(styles.title_stage, 'text_type_secondary_small')}>{startDate} -  </span>}
        <span className={clsx(styles.title_stage, 'text_type_secondary_small')}>{endDate}</span>
      </div>
      <p>{description}</p>
    </div>
  )
}