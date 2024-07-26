import styles from './header.module.css'
import logo from '../../assets/icons/logo.svg'
import profileIcon from '../../assets/icons/profile-icon.svg'
import { Link } from 'react-router-dom'

export const Header = (): JSX.Element => {
  return (
    <div className={styles.header}>
      <img src={logo} alt="логотип Кардо" className={styles.logo} />
      <Link to={'/profile'} className={styles.icon}>
        <img src={profileIcon} alt="иконка входа в личный кабинет" />
      </Link>
    </div>
  )
}
