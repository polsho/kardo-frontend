import styles from './ticker.module.css'
import clsx from 'clsx'

type TTickerProps = {
  text: string
}

export const Ticker = ({text}: TTickerProps): JSX.Element => {
  return (
    <div className={clsx(styles.wrapper)}>
      <ul className={clsx(styles.content, 'text_type_secondary_main')}>
        <li>{text}</li>
        <li>{text}</li>
        <li>{text}</li>
      </ul>
      <ul className={clsx(styles.content, 'text_type_secondary_main')} aria-hidden="true">
        <li>{text}</li>
        <li>{text}</li>
        <li>{text}</li>
      </ul>
    </div>
  )
}
