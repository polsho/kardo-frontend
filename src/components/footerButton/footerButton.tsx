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

  let isButtonActive: boolean = false;
  if (goTo === '/') {
    isButtonActive = location.pathname.endsWith(goTo)
  } else {
    isButtonActive = location.pathname.includes(goTo)
  }

  return (
    <button
      className={clsx(styles.button, "text_type_main-small", {
        [styles.button_active]: isButtonActive
      })}
      onClick={handleClick}>
      <img src={icon} alt="иконка" className={styles.icon} />
      {children}
    </button>
  )
}
