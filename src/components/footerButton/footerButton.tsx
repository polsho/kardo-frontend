import styles from './footerButton.module.css'
import clsx from 'clsx'
import { useLocation, useNavigate } from 'react-router-dom'

export type TFooterButtonProps = {
  children: string
  icon: string
  goTo: string;
}

export function FooterButton({ children, icon, goTo }: TFooterButtonProps) {
  const location = useLocation()
  const navigate = useNavigate()

  function handleClick() {
    navigate(goTo)
  }

  return (
    <button
      className={clsx(styles.button, "text_type_main-small", {
        [styles.button_active]: location.pathname.includes(goTo) ? true : false
      })}
      onClick={handleClick}>
      <img src={icon} alt="иконка" className={styles.icon} />
      {children}
    </button>
  )
}
