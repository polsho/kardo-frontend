import React, { FC, useState } from 'react'
import styles from './requestForReg.module.css'
import { SubHeader } from '../../components/subHeader/subHeader'
import { useNavigate, useParams } from 'react-router-dom'
import clsx from 'clsx'
import { Button } from '../../components/button/button'


const selectionsTypes: Record<string, string> = {
  regional: 'Региональные отборы',
  national: 'Национальные отборы',
  final: 'Гранд-финал'
}

export const RequestForReg: FC = () => {
  const params = useParams()
  const navigate = useNavigate()

  let selectionType: string = ''
  if (params.type) {
    selectionType = params.type
  }

  return (
    <>
      <SubHeader title='Заявка на регистрацию' />
      <div className={styles.container}>
        {params.type}
      </div>
    </>
  )
}