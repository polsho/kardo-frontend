import React, { useState } from 'react'
import styles from './registerStep2.module.css'
import clsx from 'clsx'
import { Button } from '../../components/button/button'
import { Input } from '../../components/input/input'
import { useNavigate, useParams } from 'react-router-dom'
import { SubHeader } from '../../components/subHeader/subHeader'
import { Select } from '../../components/select/select'
import { fetchRegisterProfileResult } from '../../services/reducers/loginSlice'
import { useAppDispatch } from '../../utils/types'

export const RegisterStep2: React.FC = () => {

  const navigate = useNavigate();
  const params = useParams()
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');
  const [city, setCity] = useState('');
  const [publicLink, setPublicLink] = useState('');

  const dispatch = useAppDispatch();

  const {email, name, surname, patronymic, password} = params

  const submitForm = (event: React.FormEvent<HTMLFormElement>): any => {
    event.preventDefault();
    dispatch(fetchRegisterProfileResult({ email: email || '',
      name: name || '',
      surname: surname || '',
      patronymic: patronymic || '',
      type: 'PARTICIPANT',
      password: password || '',
      birthday: dateOfBirth,
      country: country,
      region: region,
      city: city }));
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

            <Select
              options={['Российская Федерация']}
              style={'white'}
              label="Страна"
              name="country"
              value={country}
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                setCountry(event.target.value)
              }}
            />

            <Select
              options={['Московская область']}
              style={'white'}
              label="Регион"
              name="region"
              value={region}
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                setRegion(event.target.value)
              }}
            />
            <Select
              options={['Москва']}
              style={'white'}
              label="Город"
              name="city"
              value={city}
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                setCity(event.target.value)
              }}
            />

            <Input type="text" name="public-link" required htmlFor="Ссылка на соц. сети" value={publicLink}
                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                     setPublicLink(event.target.value)
                   }} />

            <div className={styles.button_container}>
              <Button form="register" type="submit" onClick={() => submitForm}>
                Зарегистироваться
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