import React, { useState } from 'react'
import styles from './register.module.css'
import clsx from 'clsx'
import { Button } from '../../components/button/button'
import { Input } from '../../components/input/input'
import iconBack from '../../assets/icons/back-icon.svg'
import { ButtonToggle } from '../../components/buttonToggle/buttonToggle'
import { Link, useNavigate } from 'react-router-dom'
import { SubHeader } from '../../components/subHeader/subHeader'

export const Register: React.FC = () => {

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


  const submitForm = (event: React.FormEvent<HTMLFormElement>): any => {
    event.preventDefault();
    navigate('/register/done')
  }

  return (
    <>
      <div className={styles.container_page}>
        <div>
          <SubHeader title="Привет,&nbsp;Гость!" />

            <ButtonToggle/>

          <form className={styles.form} id="login" onSubmit={submitForm}>

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

            <Input type="password" name="password" required htmlFor="Пароль" value={password}
                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                     setPassword(event.target.value)
                   }} />

            <Input type="password" name="repeat-password" required htmlFor="Повторите пароль" value={repeatPassword}
                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                     setRepeatPassword(event.target.value)
                   }} />

            <Input type="date" name="date-of-birth" required htmlFor="Дата рождения" value={dateOfBirth}
                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                     setDateOfBirth(event.target.value)
                   }} />

            <Input type="text" name="country" required htmlFor="Страна" value={country}
                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                     setCountry(event.target.value)
                   }} />

            <Input type="text" name="region" required htmlFor="Регион" value={region}
                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                     setRegion(event.target.value)
                   }} />

            <Input type="text" name="city" required htmlFor="Город" value={city}
                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                     setCity(event.target.value)
                   }} />

            <Input type="text" name="public-link" required htmlFor="Ссылка на соц. сети" value={publicLink}
                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                     setPublicLink(event.target.value)
                   }} />

            {/*<Link to='/login'>*/}
              <div className={styles.button_container}>
                <Button form="login" type="submit" onClick={() => submitForm}>
                  Зарегистироваться
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