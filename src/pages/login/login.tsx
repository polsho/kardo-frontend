import React, { useState } from 'react'
import styles from './login.module.css'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { Button } from '../../components/button/button'
import { Input } from '../../components/input/input'
import iconBack from '../../assets/icons/back-icon.svg'

export const Login: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <div className={styles.container_page}>
        <div>
          <div className={styles.heading_container}>
            <a href="#"><img className={styles.icon} src={iconBack} alt="icon-back" /></a>
            <h1 className={clsx(styles.title, 'text_type_heading-small')}>Привет,&nbsp;Гость!</h1>
          </div>

          <form className={styles.form} id="login">

            <Input type="email" name="email" required htmlFor="Логин" value={email}
                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                     setEmail(event.target.value)
                   }} />

            <div className={styles.passwordContainer}>
              <Input type="password" name="password" required htmlFor="Пароль" value={password}
                     onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                       setPassword(event.target.value)
                     }} />
            </div>

            <div className={styles.button_container}>
              <Button form="login" type="submit">
                Войти
              </Button>
            </div>

          </form>

          <Link to="/forgotPassword">
            <p className={clsx(styles.link, 'text_type_secondary_main')}>Забыли пароль?</p>
          </Link>
        </div>


        <div className={styles.container_bottom}>
          <span className={clsx(styles.text_container, "text_type_secondary_main")}>
            <p className={styles.text}>Нет аккаунта?</p>

            <Link to="/register">
              <p className={clsx(styles.link, "text_type_secondary_main")}>
                Зарегистрируйтесь
              </p>
            </Link>
          </span>

          <p className={clsx(styles.info, "text_type_main-small")}>
            При входе вы соглашаетесь на обработку, хранение и передачу
            персональных данных в рамках реализации всех этапов КАРДО
          </p>
        </div>

      </div>
    </>
  )
}