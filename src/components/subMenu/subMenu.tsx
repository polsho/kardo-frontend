import styles from './subMenu.module.css'
import { Link } from 'react-router-dom'
import leftArrow from '../../assets/icons/left-arrow.svg'
import clsx from 'clsx'

type TLinks = {
  name: string
  url: string
}

type TSubMenuProps = {
  links: TLinks[]
}

export const SubMenu = ({ links }: TSubMenuProps): JSX.Element => {
  return (
    <div className={styles.container}>
      {links.map((link) => {
        return (
            <Link to={link.url} className={clsx(styles.link, 'text_type_secondary_main')}>
                {link.name}
                <img src={leftArrow} alt="стрелочка влево"/>
            </Link>
        )
      })}
    </div>
  )
}
