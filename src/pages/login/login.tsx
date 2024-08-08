import React, { useState } from 'react'
import styles from './login.module.css'
import clsx from 'clsx'
import { Link} from 'react-router-dom'
import { Button } from '../../components/button/button'
import { Input } from '../../components/input/input'
import { SubHeader } from '../../components/subHeader/subHeader'
import { fetchLoginResult } from '../../services/reducers/loginSlice'
import { useAppDispatch} from '../../utils/types'
import { validateEmail, validatePassword } from '../../utils/utils'

export const Login: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [error, setError] = useState ('');

  const dispatch = useAppDispatch();

  function login(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    let validationError = validation()
    if (validationError !== null) {
      setError(validationError)
    } else {
      dispatch(fetchLoginResult({email: email, password: password}));
    }
  }

  const validation = (): string | null => {
    let error = validateEmail(email)
    if (error !== null) {
      setIsEmailValid(false)
      return error;
    }

    error = validatePassword(password)
    if (error !== null) {
      setIsPasswordValid(false)
      return error
    }

    return null
  }

  return (
    <>
      <div className={styles.container_page}>
        <div>
          <SubHeader title="Привет,&nbsp;Гость!" />

          <form className={styles.form} id="loginSlice" onSubmit={login}>

            <Input type="email" name="email" isValid={isEmailValid} required htmlFor="Имя пользователя" placeholder="Логин" value={email}
                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                     setEmail(event.target.value)
                   }} />

            <div className={styles.passwordContainer}>
              <Input type="password" name="password" isValid={isPasswordValid} required htmlFor="Пароль" placeholder="Пароль" value={password}
                     onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                       setPassword(event.target.value)
                     }} />
              {error && <p className={clsx(styles.error, 'text_type_main-small')}>{error}</p>}
            </div>

            <div className={styles.button_container}>
              <Button form="loginSlice" type="submit">
                Войти
              </Button>
            </div>

          </form>

          <Link to="/forgotPassword">
            <p className={clsx(styles.link, 'text_type_secondary_main')}>Забыли пароль?</p>
          </Link>
        </div>


        <div className={styles.container_bottom}>
          <span className={clsx(styles.text_container, 'text_type_secondary_main')}>
            <p className={styles.text}>Нет аккаунта?</p>

            <Link to="/register/step1">
              <p className={clsx(styles.link, 'text_type_secondary_main')}>
                Зарегистрируйтесь
              </p>
            </Link>
          </span>

          <p className={clsx(styles.info, 'text_type_main-small')}>
            При входе вы соглашаетесь на обработку, хранение и передачу
            персональных данных в рамках реализации всех этапов КАРДО
          </p>
        </div>

      </div>
    </>
  )
}