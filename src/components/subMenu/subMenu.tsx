import styles from './subMenu.module.css'
import { Link, useNavigate } from 'react-router-dom'
import leftArrow from '../../assets/icons/left-arrow.svg'
import clsx from 'clsx'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch } from '../../services/store'
import { setUser } from '../../services/reducers/loginSlice'

export type TLinks = {
  name: string
  url: string
}

type TSubMenuProps = {
  links: TLinks[]
}

export const SubMenu = ({ links }: TSubMenuProps): JSX.Element => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogout = () => {
    localStorage.removeItem('userId'); 
    dispatch(setUser(null))
    navigate('/login')
  }

  return (
    <div className={styles.container}>
      {links.map((link) => {
        if (link.url === '/logout') {
          return (
          <Link to={'/login'} onClick={handleLogout} className={clsx(styles.link, 'text_type_secondary_main')} key={uuidv4()}>
                {link.name}
                <img src={leftArrow} alt="стрелочка влево"/>
            </Link>
          )
        }
        return (
            <Link to={link.url} className={clsx(styles.link, 'text_type_secondary_main')} key={uuidv4()}>
                {link.name}
                <img src={leftArrow} alt="стрелочка влево"/>
            </Link>
        )
      })}
    </div>
  )
}
