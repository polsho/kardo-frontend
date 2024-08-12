import React from 'react'
import styles from './contestFeed.module.css'
import { Ticker } from '../../components/ticker/ticker'
import clsx from 'clsx'
import linkVideo from '../../assets/images/video-post.png'
import { Button } from '../../components/button/button'
import { StageCard } from '../../components/stageCard/stageCard'
import { v4 as uuidv4 } from 'uuid'

export const ContestFeed: React.FC = () => {

  return (
    <div className={styles.page_container}>
      <h1 className={clsx(styles.title, 'text_type_heading-main')}>кардо [ 7 ] Премия</h1>

      <p className={clsx(styles.text, 'text_type_main-default')}>
        <span className={styles.text_accent}>«Премия» </span>
        – одно из конкурсных направлений международной конкурс-премии «КАРДО»,
        ориентированное на признание и поощрение лучших сообществ и организации,
        которые внесли наибольший вклад в развитие конкретного направления
        уличной культуры и спорта за прошедший год (2023).
      </p>

      <div className="element_beyond_padding">
        <Ticker text="улица начинается здесь" />
      </div>

      <img className={styles.media} src={linkVideo} alt="видео поста" />

      <p className={clsx(styles.text, 'text_type_secondary_small')}>
        Определены
        <span className={styles.text_accent}> 120 номинантов </span>
        конкурса «Премия» в 10 направлениях:
      </p>

      <p className={clsx(styles.text_accent, "text_type_heading-small")}>Этапы премии</p>

      {/*<div className={clsx(styles.container_stage, 'text_type_main-default')}>*/}
      {/*  <h3 className={clsx(styles.title_stage, 'text_type_secondary_small')}>07.02.2024 - 17.03.2024</h3>*/}

      {/*  <p>Сбор заявок с предложениями кандидатов конкурса «Премия». Международный мониторинг различных деятелей*/}
      {/*    уличной культуры и спорта. Отбор ТОП-50 Претендентов конкурса «Премия»*/}
      {/*  </p>*/}
      {/*</div>*/}
      <div className={styles.competitionStageCard}>
        <StageCard stageData={stage} key={uuidv4()} />
      </div>

      <p className={clsx(styles.text, 'text_type_secondary_main')}>
        Критерии равнозначны, диапазон баллов от 1 до 10 по каждому критерию
      </p>

      <p className={clsx(styles.text, 'text_type_main-default')}>
        Рекомендации: вся информация о сообществе и возможность связаться
        с участником должна быть в открытом доступе в сети интернет.
      </p>

      <h2 className={clsx(styles.title, 'text_type_heading-main')}>Призовой фонд</h2>

      <p className={clsx(styles.text, 'text_type_secondary_large')}>Путевка в Гранд-Финал, призовой фонд по<span
        className={styles.text_accent}> 100 000 рублей </span>на каждое направление в конкурсе!
      </p>

      <div className={styles.button_container}>
        <Button>Перейти к спискам номинантов</Button>
      </div>
    </div>
  )
}