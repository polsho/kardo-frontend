import React from 'react'
import styles from './login.module.css'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { Button } from '../../components/button/button'
import { Input } from '../../components/input/input'

export const Login: React.FC = () => {

  return (
    <>
      <div className={styles.container}>

        <div>
          <h1 className={clsx(styles.title, 'text_type_main-medium')}>Привет,Гость!</h1>
        </div>

        <div>
          <form className={styles.form} id="login">
            <Input id="email" type="email" name="email" required htmlFor="Логин" />

            <div className={styles.passwordContainer}>
              <Input id="password" type="password" name="password" required htmlFor="Пароль" />
            </div>
            <Button form="login" type="submit">
              Войти
            </Button>

            <div className={styles.containerLinks}>
              <Link to="/forgotPassword">
                <p className={clsx(styles.link, 'text_type_main-small text_color_background')}>Забыли пароль?</p>
              </Link>
            </div>

            <span className={styles.textContainer}>
                  <p className={styles.text}>Нет аккаунта?</p>

                  <Link to="/register">
                    <p
                      className={clsx(styles.link, 'text_type_secondary_small text_color_accent')}>Зарегистрируйтесь</p>
                  </Link>
                </span>

            <p className={styles.info}>При входе вы соглашаетесь на обработку, хранение и передачу персональных данных в
              рамках реализации
              всех этапов КАРДО</p>
          </form>
        </div>


      </div>
    </>
  )
}