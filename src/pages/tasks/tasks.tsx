import React, { FC, useState } from 'react'
import styles from './tasks.module.css'
import { SubHeader } from '../../components/subHeader/subHeader'
import { Link, useNavigate, useParams } from 'react-router-dom'
import clsx from 'clsx'
import { Button } from '../../components/button/button'
import { StageCard } from '../../components/stageCard/stageCard'
import { Preloader } from '../../components/preloader/preloader'

import { selectionsData } from '../../pages/profile/profile'

export const Tasks: FC = () => {
  const params = useParams()

  return (
    <>
      <SubHeader title="Задания для участников" />
      <div className={clsx(styles.content, 'text_type_main-default')}>
        <p>
          Участник снимает и выкладывает видео со вставкой интро и аутро в социальную сеть участника с
          хэштегами #KARDO, #KARDO7 (видео загружается в личный кабинет на сайте{' '}
          <span className={styles.link}>
            <Link to="http://kardoaward.com" target="_blank">
              http://kardoaward.com
            </Link>
          </span>{' '}
          в виде ссылки на видеоролик, загруженный на облачный диск, а также в виде ссылки на открытый
          источник в свободном доступе (ссылка на видеоролик в социальной сети участника)). Задания для
          отборочного этапа у всех категорий разные. Ссылка на диск должна быть активна и ссылка на
          видеоролик, выложенный в социальных сетях, должна быть доступна до завершения Конкурс-премии.
          Необходимый материал в виде аутро и интро каждый участник скачивает самостоятельно с сайта
          Конкурс-премии. Данная вставка является обязательной.
        </p>
        <div>
          <h3 className={clsx(styles.subTitle, 'text_type_main-default-bold')}>Хип-хоп (Hip-hop)</h3>
          <ul className={styles.tasksList}>
            <li>
              Снять видео своего танца длиной 50-60 секунд под любой хип-хоп трек. Важно, чтобы видео было без
              монтажа в вертикальном формате и без наложения музыкальной дорожки.
            </li>
          </ul>
        </div>
        <div>
          <h3 className={clsx(styles.subTitle, 'text_type_main-default-bold')}>Брейкинг (Breaking)</h3>
          <ul className={styles.tasksList}>
            <li>
              Категория «Тoprock 1х1»: Снять видео под любую музыку от 45 секунд до 1 минуты в данном стиле.
              Важно, чтобы видео было без монтажа в вертикальном формате и без наложения музыкальной дорожки.
            </li>
            <li>
              Категория «Footwork 1×1»: Снять видео под любую музыку от 45 секунд до 1 минуты в данном стиле.
              Важно, чтобы видео было без монтажа в вертикальном формате и без наложения музыкальной
              дорожки. Категория «Breaking 1×1» для бибоев и бигерл: Снять видео под любую музыку, выход
              должен длиться от 45 секунд до 1 минуты. Важно, чтобы видео было без монтажа в вертикальном
              формате и без наложения музыкальной дорожки.
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
