import styles from './subHeader.module.css'
import { Link, useNavigate } from 'react-router-dom'
import iconBack from '../../assets/icons/back-icon.svg'
import clsx from 'clsx'

type TSubHeaderProps = {
  title: string
}

export const SubHeader = ({ title }: TSubHeaderProps): JSX.Element => {
  const navigate = useNavigate()

  function handleClick() {
    navigate(-1)
  }
  return (
    <div className={styles.container}>
      <div onClick={handleClick}>
        <img className={styles.icon} src={iconBack} alt="icon-back" />
      </div>
      <h1 className={clsx(styles.title, 'text_type_heading-small')}>{title}</h1>
    </div>
  )
}
