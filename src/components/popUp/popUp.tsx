import styles from './popUp.module.css'
import clsx from 'clsx'


type TpopUpProps = {
  title: string,
  text: string
}

export const PopUp = ({ title,text }: TpopUpProps): JSX.Element => {
  return (
    <>
      <h1 className="text_type_secondary_main">{title}</h1>
      <p className={clsx(styles.text, "text_type_main-default")}>{text}</p>
    </>
  )
}
