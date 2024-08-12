import React, { FC, useEffect, useState } from 'react'
import styles from './selections.module.css'
import { SubHeader } from '../../components/subHeader/subHeader'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '../../components/button/button'
import { StageCard } from '../../components/stageCard/stageCard'
import { Preloader } from '../../components/preloader/preloader'
import clsx from 'clsx'
import { v4 as uuidv4 } from 'uuid'

import { selectionsData } from '../../pages/profile/profile'

export const Selections: FC = () => {
  const params = useParams()
  const navigate = useNavigate()
  const [isRegOpened, setRegOpened] = useState(true)

  let selectionType: string = ''
  if (params.type) {
    selectionType = params.type
  }

  const selectionData = selectionsData?.find(comp => comp.type === selectionType)
  if (!selectionData) {
    return <Preloader />
  }

  function toDate(data: string): Date {
    return new Date(`${data.slice(-4)}-${data.slice(3, 5)}-${data.slice(0, 2)}`)
  }

  useEffect(() => {
    if (selectionData.startDate && selectionData.endDate) {
      const today = new Date()
      setRegOpened(today >= new Date(toDate(selectionData.startDate)) && today <= new Date(toDate(selectionData.endDate)))
    }
  })
  return (
    <>
      <SubHeader title={selectionData.name} />
      {(selectionType === 'regional' || selectionType === 'national') && (
        <div className={styles.container}>
          <p className={clsx(styles.regStatus, 'text_type_secondary_main')}>
            {`Регистрация ${isRegOpened ? 'открыта' : 'закрыта'}!`}
          </p>
          <div className={styles.stages}>
            <h2 className="text_type_secondary_small">{selectionData.name}</h2>
            <ul className={clsx(styles.stagesList, 'text_type_main-default')}>
              {selectionData.stages.map(stage => {
                return <li key={uuidv4()}>{`${stage.name} (${stage.startDate})`}</li>
              })}
            </ul>
          </div>
          <Button
            isDisabled={!isRegOpened}
            onClick={() => {
              navigate(`/events/requestForReg/${selectionType}`)
            }}>
            Подать Заявку
          </Button>
        </div>
      )}
      {(selectionType === 'final') && (
        <div className={styles.container}>
          <p className={clsx(styles.regStatus, 'text_type_secondary_main')}>
            {`Регистрация открыта!`}
          </p>

          <Button
            onClick={() => {
              navigate(`/events/requestForReg/${selectionType}`)
            }}>
            Подать Заявку
          </Button>
        </div>
      )}
      {(selectionType === 'online' || selectionType === 'video') && (
        <div className={styles.competition}>
          <div className={clsx(styles.level, 'text_type_secondary_small')}>
            <span>Уровень {selectionData.level}%</span>
          </div>
          <ul className={styles.competitionStages}>
            {selectionData.stages.map((stage, index) => {
              return (
                <li className={styles.competitionStage} key={uuidv4()}>
                  <div className={styles.stageIndex}>{index + 1}</div>
                  <div className={styles.competitionStageCard}>
                    <StageCard stageData={stage}/>
                  </div>
                </li>
              )
            })}
          </ul>
          <div className={styles.description}>
            <h3 className={clsx(styles.descriptionTitle, 'text_type_secondary_main')}>Описание конкурса</h3>
            <p className={clsx(styles.descriptionText, 'text_type_main-default')}>
              {selectionData.description}
            </p>
          </div>
        </div>
      )}
    </>
  )
}
