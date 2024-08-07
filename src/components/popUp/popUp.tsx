import styles from './popUp.module.css'
import { Link } from 'react-router-dom'
import leftArrow from '../../assets/icons/left-arrow.svg'
import clsx from 'clsx'
import { v4 as uuidv4 } from 'uuid'



type TpopUpProps = {
  text: string
}

export const PopUp = ({ text }: TpopUpProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <p>{text}</p>
    </div>
  )
}
