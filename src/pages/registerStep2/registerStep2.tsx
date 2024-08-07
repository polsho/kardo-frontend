import React, { useState } from 'react'
import styles from './registerStep2.module.css'
import clsx from 'clsx'
import { Button } from '../../components/button/button'
import { Input } from '../../components/input/input'
import { ButtonToggle } from '../../components/buttonToggle/buttonToggle'
import { Link, useNavigate } from 'react-router-dom'
import { SubHeader } from '../../components/subHeader/subHeader'

export const RegisterStep2: React.FC = () => {

  const navigate = useNavigate();
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

          <form className={styles.form} id="register2" onSubmit={submitForm}>

            <Input type="date" name="date-of-birth" required htmlFor="Дата рождения" value={dateOfBirth}
                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                     setDateOfBirth(event.target.value)
                   }} />

            {/*<Input type="text" name="country" required htmlFor="Страна" value={country}*/}
            {/*       onChange={(event: React.ChangeEvent<HTMLInputElement>) => {*/}
            {/*         setCountry(event.target.value)*/}
            {/*       }} />*/}

            <select name="city" id="city-select">
              <option value="">Страна</option>
              <option value="petersburg">Россия</option>
              <option value="samara">Бразилия</option>
              <option value="perm">Чили</option>
              <option value="novosibirsk">Гонконг</option>
            </select>

            {/*<Input type="text" name="region" required htmlFor="Регион" value={region}*/}
            {/*       onChange={(event: React.ChangeEvent<HTMLInputElement>) => {*/}
            {/*         setRegion(event.target.value)*/}
            {/*       }} />*/}

            <select name="city" id="city-select">
              <option value="">Регион</option>
              <option value="petersburg">Московская область</option>
              <option value="samara">Самарская область</option>
              <option value="perm">Тверская область</option>
              <option value="novosibirsk">Астраханская область</option>
            </select>

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
              <Button form="register" type="submit" onClick={() => submitForm}>
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