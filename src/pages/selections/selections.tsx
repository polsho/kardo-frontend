import React, { FC, useState } from 'react'
import styles from './selections.module.css'
import { SubHeader } from '../../components/subHeader/subHeader'
import { useNavigate, useParams } from 'react-router-dom'
import clsx from 'clsx'
import { Button } from '../../components/button/button'

type TSelectionsProps = {
  // compName: string;
}

const selectionsTypes: Record<string, string> = {
  regional: 'Региональные отборы',
  national: 'Национальные отборы',
  final: 'Гранд-финал'
}

export const Selections: FC<TSelectionsProps> = () => {
  const params = useParams()
  const navigate = useNavigate()
  const [isRegOpened, setRegOpened] = useState(true)

  let selectionType: string = ''
  if (params.type) {
    selectionType = params.type
  }

  return (
    <>
      <SubHeader title={selectionsTypes[selectionType]} />
      <div className={styles.container}>
        <p className={clsx(styles.regStatus, 'text_type_secondary_main')}>
          {`Регистрация ${isRegOpened ? 'открыта' : 'закрыта'}!`}
        </p>
        <div className={styles.stages}>
          {selectionType === 'regional' && 
            <>
              <h2 className='text_type_secondary_small'>Региональные этапы (Российская Федерация)</h2>
              <ul className={clsx(styles.stagesList, 'text_type_main-default')}>  
                <li>Владимирская область, Владимир (25.05.24)</li>
                <li>Московская область, Дмитров (14.07.24)</li>
              </ul>
            </>
          }
        </div>
        <Button isDisabled={!isRegOpened} onClick={() => {navigate(`/requestForReg/${selectionType}`)}}>
            Подать Заявку
        </Button>
      </div>
    </>
  )
}
