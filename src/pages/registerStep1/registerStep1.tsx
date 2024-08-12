import React, { useState } from 'react'
import styles from './registerStep1.module.css'
import clsx from 'clsx'
import { Button } from '../../components/button/button'
import { Input } from '../../components/input/input'
import { ButtonToggle } from '../../components/buttonToggle/buttonToggle'
import { useNavigate } from 'react-router-dom'
import { SubHeader } from '../../components/subHeader/subHeader'
import { validateEmail, validatePassword } from '../../utils/utils'

export const RegisterStep1: React.FC = () => {

  const navigate = useNavigate()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [patronymicName, setPatronymicName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')

  const [isEmailValid, setIsEmailValid] = useState(true)
  const [isPasswordValid, setIsPasswordValid] = useState(true)
  const [isRepeatPasswordValid, setIsRepeatPasswordValid] = useState(true)
  const [errorEmail, setErrorEmail] = useState('')
  const [errorPassword, setErrorPassword] = useState('')
  const [errorRepeatPassword, setErrorRepeatPassword] = useState('')


  const continueForm = (event: React.FormEvent<HTMLFormElement>): any => {
    event.preventDefault()
    navigate(`/register/step2?name=${firstName}&surname=${lastName}&patronymic=${patronymicName}&email=${email}&password=${password}`)
  }

  const validationEmail = (): string | null => {
    let errorEmail = validateEmail(email)
    if (errorEmail !== null) {
      setIsEmailValid(false)
      setErrorEmail(errorEmail)
      return errorEmail
    }

    setIsEmailValid(true)
    setErrorEmail('')
    errorEmail = null
    return null
  }

  const validationPassword = (): string | null => {
    let errorPassword = validatePassword(password)
    if (errorPassword !== null) {
      setIsPasswordValid(false)
      setErrorPassword(errorPassword)
      return errorPassword
    }
    setIsPasswordValid(true)
    setErrorPassword('')
    errorPassword = null
    return null
  }

  const validationRepeatPassword = (): string | null => {
    let errorRepeatPassword = 'Повторный пароль введен не верно'
    if (password !== repeatPassword) {
      setIsRepeatPasswordValid(false)
      setErrorRepeatPassword(errorRepeatPassword)
      return errorRepeatPassword
    }
    setIsRepeatPasswordValid(true)
    setErrorRepeatPassword('')
    return null
  }

  return (
    <>
      <div className={styles.container_page}>
        <div>
          <SubHeader title="Привет,&nbsp;Гость!" />

          <ButtonToggle />

          <form className={styles.form} id="register1" onSubmit={continueForm}>

            <Input type="text" name="first-name" htmlFor="Имя" value={firstName}
                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                     setFirstName(event.target.value)
                   }} />

            <Input type="text" name="last-name" htmlFor="Фамилия" value={lastName}
                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                     setLastName(event.target.value)
                   }} />

            <Input type="text" name="patronymic-name" htmlFor="Отчество" value={patronymicName}
                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                     setPatronymicName(event.target.value)
                   }} />

            <div>
              <Input type="email" name="email" isValid={isEmailValid} htmlFor="Email" value={email}
                     onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                       setEmail(event.target.value)
                       validationEmail()
                     }} />
              {errorEmail && <p className={clsx(styles.error, 'text_type_main-small')}>{errorEmail}</p>}
            </div>

            <div>
              <Input type="password" name="password" isValid={isPasswordValid} htmlFor="Пароль"
                     value={password}
                     onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                       setPassword(event.target.value)
                       validationPassword()
                     }} />

              {errorPassword && <p className={clsx(styles.error, 'text_type_main-small')}>{errorPassword}</p>}
            </div>

            <div>
              <Input type="password" name="repeat-password" isValid={isRepeatPasswordValid}
                     htmlFor="Повторите пароль" value={repeatPassword}
                     onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                       setRepeatPassword(event.target.value)
                       validationRepeatPassword()
                     }} />
              {errorRepeatPassword &&
                <p className={clsx(styles.error, 'text_type_main-small')}>{errorRepeatPassword}</p>}
            </div>

            <div className={styles.button_container}>
              <Button form="register1" type="submit" onClick={() => continueForm}>
                Далее
              </Button>
            </div>

          </form>

          <p className={clsx(styles.info, 'text_type_main-small')}>
            При регистрации вы соглашаетесь на обработку, хранение и передачу
            персональных данных в рамках реализации всех этапов КАРДО
          </p>
        </div>

      </div>
    </>
  )
}