import React, { useState } from 'react'
import styles from './login.module.css'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { Button } from '../../components/button/button'
import { Input } from '../../components/input/input'

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <div className={styles.container}>

          <h1 className={clsx(styles.title, 'text_type_main-medium')}>Привет,Гость!</h1>

          <form className={styles.form} id="login">
            <Input type="email" name="email" required htmlFor="Логин" value={email}
                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                     setEmail(event.target.value)
                   }}/>

            <div className={styles.passwordContainer}>
              <Input type="password" name="password" required htmlFor="Пароль" value={password}
                     onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                       setPassword(event.target.value)
                     }}/>
            </div>
            <Button form="login" type="submit">
              Войти
            </Button>

            <div className={styles.containerLinks}>
              <Link to="/forgotPassword">
                <p className={styles.link}>Забыли пароль?</p>
              </Link>
            </div>

            <span className={styles.textContainer}>
                  <p className={styles.text}>Нет аккаунта?</p>

                  <Link to="/register">
                    <p className={styles.link}>
                      Зарегистрируйтесь
                    </p>
                  </Link>
                </span>

            <p className={styles.info}>
              При входе вы соглашаетесь на обработку, хранение и передачу
              персональных данных в рамках реализации всех этапов КАРДО</p>
          </form>

      </div>
    </>
  )
}