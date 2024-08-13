import React from 'react'
import styles from './contestFeed.module.css'
import { Ticker } from '../../components/ticker/ticker'
import clsx from 'clsx'
import linkVideo from '../../assets/images/video-post.png'
import { Button } from '../../components/button/button'
import { StageCardFeed } from '../../components/stageCardFeed/stageCardFeed'

export const ContestFeed: React.FC = () => {

  const stageData = [
    {
      startDate: '07.02.2024',
      endDate: '17.04.2024',
      tasksId: '10',
      description: `Сбор заявок с предложениями кандидатов конкурса «Премия». Международный мониторинг различных деятелей уличной культуры и спорта. Отбор ТОП-50 Претендентов конкурса «Премия»`
    },
    {
      startDate: '07.05.2024',
      endDate: '08.06.2024',
      tasksId: '11',
      description: 'Публикация лонг-листов Претендентов конкурса «Премия»'
    },
    {
      startDate: '14.06.2024',
      endDate: '16.06.2024',
      tasksId: '12',
      description: 'Народное онлайн-голосование. Отбор ТОП-12 Номинантов конкурса «Премия»'
    },
    {
      startDate: '07.02.2024',
      endDate: '17.04.2024',
      tasksId: '13',
      description: 'Публикация результатов народного онлайн-голосования конкурса «Премия»'
    },
    {
      startDate: '18.05.2024',
      endDate: '07.07.2024',
      tasksId: '14',
      description: 'Работа независимых Экспертов. Отбор ТОП-3 Лауреатов конкурса «Премия»'
    },
    {
      startDate: '14.07.2024',
      endDate: '21.08.2024',
      tasksId: '15',
      description: 'Публикация шорт-листов конкурса «Премия»'
    },
    {
      startDate: '14.07.2024',
      endDate: '21.08.2024',
      tasksId: '16',
      description: 'Гранд-финал, церемония открытия, церемония награждения Победителей конкурса «Премия»'
    }
  ]
  const requirementsData = [
    {
      startDate: '01',
      tasksId: '1q',
      description: `Соответствие конкретному направлению уличной культуры и спорта`
    },
    {
      startDate: '02',
      tasksId: '2q',
      description: 'Прозрачность и освещаемость деятельности'
    },
    {
      startDate: '03',
      tasksId: '3q',
      description: 'Популярность внутри направления, аудитория от 500 человек'
    }
  ]
  const criteriaData = [
    {
      number: '01',
      tasksId: '7q',
      description: `Масштаб деятельности`
    },
    {
      number: '02',
      tasksId: '8q',
      description: 'Разнообразие и всесторонняя направленность деятельности'
    },
    {
      number: '03',
      tasksId: '9q',
      description: 'Реальный вклад в индустрию, инновационные подходы'
    }
  ]

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

      <p className={clsx(styles.title_cards, "text_type_heading-small")}>Этапы премии</p>

      <div>
        {
          stageData.map(stage => <StageCardFeed startDate={stage.startDate} endDate={stage.endDate}
                                                description={stage.description} key={stage.tasksId} />)
        }
      </div>

      <p className={clsx(styles.title_cards, "text_type_heading-small")}>Требования к кандидатам</p>

      <div>
        {
          requirementsData.map(stage => <StageCardFeed number={stage.startDate}
                                                description={stage.description} key={stage.tasksId} />)
        }
      </div>

      <p className={clsx(styles.title_cards, "text_type_heading-small")}>Критерии оценки конкурса</p>

      <div>
        {
          criteriaData.map(stage => <StageCardFeed number={stage.number}
                                                description={stage.description} key={stage.tasksId} />)
        }
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