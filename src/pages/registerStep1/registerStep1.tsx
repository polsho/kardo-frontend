import React, { useState } from 'react'
import styles from './registerStep1.module.css'
import clsx from 'clsx'
import { Button } from '../../components/button/button'
import { Input } from '../../components/input/input'
import { ButtonToggle } from '../../components/buttonToggle/buttonToggle'
import { useNavigate } from 'react-router-dom'
import { SubHeader } from '../../components/subHeader/subHeader'

export const RegisterStep1: React.FC = () => {

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [patronymicName, setPatronymicName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [country, setCountry] = useState('')
  const [region, setRegion] = useState('')
  const [city, setCity] = useState('')
  const [publicLink, setPublicLink] = useState('')

  const [isPasswordValid, setIsPasswordValid] = useState(true);


  const continueForm = (event: React.FormEvent<HTMLFormElement>): any => {
    event.preventDefault();
    navigate('/register/step2')
  }

  return (
    <>
      <div className={styles.container_page}>
        <div>
          <SubHeader title="Привет,&nbsp;Гость!" />

            <ButtonToggle/>

          <form className={styles.form} id="register1" onSubmit={continueForm}>

            <Input type="text" name="first-name" required htmlFor="Имя" value={firstName}
                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                     setFirstName(event.target.value)
                   }} />

            <Input type="text" name="last-name" required htmlFor="Фамилия" value={lastName}
                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                     setLastName(event.target.value)
                   }} />

            <Input type="text" name="patronymic-name" required htmlFor="Отчество" value={patronymicName}
                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                     setPatronymicName(event.target.value)
                   }} />

            <Input type="email" name="email" required htmlFor="Email" value={email}
                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                     setEmail(event.target.value)
                   }} />

            <div>
              <Input type="password" name="password" isValid={isPasswordValid} required htmlFor="Пароль" value={password}
                     onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                       setPassword(event.target.value)
                     }} />

              <p className={clsx(styles.error, 'text_type_main-small')}>Ошибка</p>
            </div>

            <Input type="password" name="repeat-password" isValid={isPasswordValid} required htmlFor="Повторите пароль" value={repeatPassword}
                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                     setRepeatPassword(event.target.value)
                   }} />

            {/*<Link to='/login'>*/}
            <div className={styles.button_container}>
              <Button form="register1" type="submit" onClick={() => continueForm}>
                Далее
              </Button>
            </div>
            {/*</Link>*/}

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