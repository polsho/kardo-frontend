import styles from './header.module.css'
import profileIcon from '../../assets/icons/profile-icon.svg'
import { Link } from 'react-router-dom'
import { LogoRectangle } from '../logoRectangle/logoRectangle'

export const Header = (): JSX.Element => {
  return (
    <div className={styles.header}>
      <Link to={'/'} className={styles.logo}>
        <LogoRectangle />
      </Link>
      <Link to={'/profile'} className={styles.icon}>
        <img src={profileIcon} alt="иконка входа в личный кабинет" />
      </Link>
    </div>
  )
}
