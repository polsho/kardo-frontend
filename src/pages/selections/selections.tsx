import React, { FC, useState } from 'react'
import styles from './selections.module.css'
import { SubHeader } from '../../components/subHeader/subHeader'
import { useParams } from 'react-router-dom'
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
  const [isRegOpened, setRegOpened] = useState(false)

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
        <div className={styles.stagesByRegions}></div>
        <Button>
            Подать Заявку
        </Button>
      </div>
    </>
  )
}
