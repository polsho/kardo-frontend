import React, { useState } from 'react'
import styles from './profileChanges.module.css'
import { useNavigate } from 'react-router-dom'
import { SubHeader } from '../../components/subHeader/subHeader'
import ProfilePhoto from '../../assets/images/example-profile-photo.png'
import clsx from 'clsx'
import { Input } from '../../components/input/input'
import { Button } from '../../components/button/button'

export const ProfileChanges: React.FC = () => {
  const navigate = useNavigate()

  const [urlPhoto, setUrlPhoto] = useState(ProfilePhoto)

  function changePhoto() {
    // добавить загрузку фото
  }

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [patronymicName, setPatronymicName] = useState('')
  const [country, setCountry] = useState('')
  const [region, setRegion] = useState('')
  const [city, setCity] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [gendre, setGendre] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [citizenship, setСitizenship] = useState('')
  const [password, setPassword] = useState('')
  const [publicLink, setPublicLink] = useState('')
  const [portfolio, setPortfolio] = useState('')
  const [about, setAbout] = useState('')

  return (
    <>
      <SubHeader title="Профиль" />
      <div className={styles.container}>
        <div className={styles.photo} onClick={changePhoto}>
          <img className={styles.photoImage} src={urlPhoto} alt="фото пользователя" />
          <div className={clsx(styles.photoText, 'text_type_secondary_large')}>Ваше фото</div>
        </div>

        <form className={styles.form} id="changes">
          <Input
            type="text"
            name="first-name"
            required
            htmlFor="Имя"
            value={firstName}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setFirstName(event.target.value)
            }}
          />

          <Input
            type="text"
            name="last-name"
            required
            htmlFor="Фамилия"
            value={lastName}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setLastName(event.target.value)
            }}
          />

          <Input
            type="text"
            name="patronymic-name"
            required
            htmlFor="Отчество"
            value={patronymicName}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setPatronymicName(event.target.value)
            }}
          />

          <Input
            type="text"
            name="country"
            required
            htmlFor="Страна"
            value={country}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setCountry(event.target.value)
            }}
          />

          <Input
            type="text"
            name="region"
            required
            htmlFor="Регион"
            value={region}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setRegion(event.target.value)
            }}
          />

          <Input
            type="text"
            name="city"
            required
            htmlFor="Город"
            value={city}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setCity(event.target.value)
            }}
          />

          <Input
            type="email"
            name="email"
            required
            htmlFor="Email"
            value={email}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(event.target.value)
            }}
          />

          <Input
            type="tel"
            name="phone"
            required
            htmlFor="Телефон"
            value={phone}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setPhone(event.target.value)
            }}
          />

          <Input
            type="text"
            name="gendre"
            required
            htmlFor="Пол"
            value={gendre}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setGendre(event.target.value)
            }}
          />

          <Input
            type="date"
            name="date-of-birth"
            required
            htmlFor="Дата рождения"
            value={dateOfBirth}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setDateOfBirth(event.target.value)
            }}
          />

          <Input
            type="text"
            name="citizenship"
            required
            htmlFor="Гражданство"
            value={citizenship}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setСitizenship(event.target.value)
            }}
          />

          <Input
            type="password"
            name="password"
            required
            htmlFor="Пароль"
            value={password}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(event.target.value)
            }}
          />

          <Input
            type="text"
            name="public-link"
            required
            htmlFor="Ссылка на соц. сети"
            value={publicLink}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setPublicLink(event.target.value)
            }}
          />

          <Input
            type="text"
            name="portfolio"
            required
            htmlFor="Портфолио"
            value={portfolio}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setPortfolio(event.target.value)
            }}
          />

          {/* Заменит на textarea */}
          <Input
            type="text"
            name="about"
            required
            htmlFor="Описание о себе"
            value={about}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setAbout(event.target.value)
            }}
          />

          <div className={styles.formButton}>
            <Button form="changes" type="submit">
              Сохранить изменения
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
