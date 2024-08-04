import React, { FC, useState } from 'react'
import styles from './requestForReg.module.css'
import { SubHeader } from '../../components/subHeader/subHeader'
import { useParams } from 'react-router-dom'
import clsx from 'clsx'
import { v4 as uuidv4 } from 'uuid'
import { Button } from '../../components/button/button'
import { selectionsData } from '../profile/profile'
import { Preloader } from '../../components/preloader/preloader'
import { Select } from '../../components/select/select'
import { DirectionCheck } from '../../components/directionCheck/directionCheck'
import { Directions } from '../../utils/types'
import { Input } from '../../components/input/input'

export const RequestForReg: FC = () => {
  const params = useParams()

  let selectionType: string = ''
  if (params.type) {
    selectionType = params.type
  }

  const selectionData = selectionsData?.find(comp => comp.type === selectionType)
  if (!selectionData) {
    return <Preloader />
  }
  const options = selectionData.stages.map(stage => stage.name)

  const [cityStage, setCityStage] = useState(options[0])
  const [isHidden, setIsHidden] = useState(false)

  const [directions, setDirections] =useState([''])
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [patronymicName, setPatronymicName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [gendre, setGendre] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [citizenship, setСitizenship] = useState('')
  const [publicLink, setPublicLink] = useState('')

  function handleCItyStageChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setCityStage(event.target.value)
  }

  function handleNextButton() {
    setIsHidden(!isHidden);
    console.log(isHidden)
  }

  const currentStage = selectionData.stages.find(stage => {
    return stage.name === cityStage
  })

  return (
    <>
      <SubHeader title="Заявка на регистрацию" />
      <div className={styles.container}>
        <form className={styles.select} action="" id="city">  
          {/* Сделать ограничение по количеству нажатых checkboxes */}
          <Select
            value={cityStage}
            onChange={handleCItyStageChange}
            options={options}
            id="city"
            style={'white-red'}></Select>
        </form>
        <div className={clsx(styles.selectedStage, 'text_type_main-default-bold')}>
          <div>{`${selectionData.name} КАРДО [7] - ${currentStage?.name.split(',')[1]}`}</div>
          <div className={clsx(styles.dates, 'text_type_main-default')}>
            <span>Начало: {currentStage?.startDate}</span>
            <span>Конец: {currentStage?.startDate}</span>
          </div>
        </div>
        <div className={clsx(styles.directionChoice, {[styles.hidden]: isHidden})}>
          <h3 className={clsx(styles.directionChoiceTitle, 'text_type_secondary_main')}>Направления</h3>
          <form className={styles.checkboxes} id='direction'>
            {Object.keys(Directions).map((d) => {
              return (
                <DirectionCheck option={d.toString()} key={uuidv4()}></DirectionCheck>
              )
            })}
          </form>
        </div>
        <Button type='button' onClick={handleNextButton}>{isHidden ? 'Назад' : 'Далее'}</Button>
        <form className={clsx(styles.dataForm, {[styles.isNotHidden]: isHidden})} id='regForComp'>
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
            type="text"
            name="public-link"
            required
            htmlFor="Ссылка на соц. сети"
            value={publicLink}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setPublicLink(event.target.value)
            }}
          />
          <div className={styles.submitButton}>
          <Button type='submit'>Подать заявку</Button>
          </div>
        </form>
      </div>
    </>
  )
}
