import React, { useState } from 'react'
import styles from './main.module.css'
import { Button } from '../../components/button/button'
import kardoImage from '../../assets/images/kardo-main-page.png'
import slider1 from '../../assets/images/image-for-slider-1.png'
import slider2 from '../../assets/images/image-for-slider-2.png'
import clsx from 'clsx'
import { Link, useNavigate } from 'react-router-dom'
import { Ticker } from '../../components/ticker/ticker'
import { SwipedCarousel } from '../../components/swipedCarousel/swipedCarousel'
import { v4 as uuidv4 } from 'uuid';

type statInfo = {
  number: string
  name: string
}

export const Main: React.FC = () => {
  const navigate = useNavigate()
  const [youtubeID] = useState('55QWhJykef8')

  const sliderImages: string[] = [slider1, slider2, slider1]

  const stats: statInfo[] = [
    { number: '250 тыс', name: 'Зрителей онлайн' },
    { number: '250 млн', name: 'Медиаохват' },
    { number: '2, 5 тыс', name: 'Участников грандфинала' },
    { number: '70 тыс', name: 'Зрителей оффлайн этапов' }
  ]

  function handleClick() {
    navigate('/profile')
  }

  return (
    <>
      <img className='element_beyond_padding' src={kardoImage} alt="надпись free running на фоне прыгающего мужчины" />
      <div className={styles.mainSection}>
        <div className={styles.header}>
          <h1 className={clsx(styles.title, 'text_type_heading-main')}>кардо [ 7 ]</h1>
          <p className={clsx(styles.text, 'text_type_secondary_main')}>
            Регистрация на национальные и региональные этапы!
          </p>
          <div className={styles.button} onClick={handleClick}>
            <Button type="button">Подать заявку</Button>
          </div>
        </div>
        <ul className={clsx(styles.cards, 'text_type_main-default')}>
          <li>
            <h3 className={clsx(styles.cardTitle, 'text_type_secondary_small')}>Наша миссия</h3>
            <p>
              Мир «КАРДО» полон возможностей для людей улиц. В нем удивительным образом переплетены сотни
              историй и судеб. И все стало возможным благодаря вам.
            </p>
          </li>
          <li>
            <h3 className={clsx(styles.cardTitle, 'text_type_secondary_small')}>Цели кардо</h3>
            <p>
              Поиск, поддержка и продюсирование талантливых людей в области уличной культуры и спорта, а также
              информирование мирового общества о самых интересных организациях, проектах и людях из индустрии
              улиц.
            </p>
          </li>
        </ul>
      </div>
      <div className='element_beyond_padding'>
      <Ticker text="улица начинается здесь" />
      </div>
      <div className={clsx(styles.slider, 'element_beyond_padding')}>
        <SwipedCarousel>
          {sliderImages.map(image => {
            return <img src={image} alt="" className={styles.sliderImage} key={uuidv4()} ></img>
          })}
        </SwipedCarousel>
      </div>
      <div className={styles.AboutUsSection}>
        <div>
          <h2 className={clsx(styles.title, styles.AboutUsSectionTitle, 'text_type_heading-small')}>о нас</h2>
          <p className="text_type_main-default">
            «КАРДО» — так в Римской империи называлась улица, ориентированная с севера на юг. Именно она была
            центром социальной и экономической жизни города. Сегодня же это слово не только не теряет
            актуальности, но и обретает новую силу. Потому что «КАРДО» — это первая международная премия за
            развитие уличной культуры и спорта, которая с каждым годом берет новые высоты и вдохновляет на это
            людей!
          </p>
        </div>
        <div className={styles.statSection}>
          {stats.map(stat => {
            return (
              <div className={clsx(styles.statInfoCard, 'text_type_secondary_small')} key={uuidv4()}>
                <div className={clsx(styles.statNumber, 'text_type_heading-small')}>{stat.number}</div>
                <div className={styles.statName}>{stat.name}</div>
              </div>
            )
          })}
        </div>
        <div className="text_type_main-default">
          <p>
            «КАРДО» — проект, который входит в состав президентской платформы{' '}
            <span className={styles.link}>
              <Link to="https://rsv.ru/" target="_blank">
                «Россия — страна возможностей».
              </Link>
            </span>{' '}
            Он направлен на поиск и поддержку талантов в области уличной культуры и спорта, создания
            социальных лифтов для деятелей улиц.
          </p>
          <p>
            Международная конкурс-премия «КАРДО»  является первой и единственной в мире премией за вклад в
            развитие уличной культуры и спорта, в рамках которой лучшие представители уличной культуры и
            спорта из разных стран проходят конкурсные испытания в четырех форматах: премия, видео,
            соревнования, общественные проекты по 11 направлениям: BMX, KICKSCOOTERING, HIP-HOP, PARKOUR,
            FREERUNNING, TRICKING, BREAKING, WORKOUT, GRAFFITI, SKATEBOARDING, DJING. Премия «КАРДО» открывает
          </p>
          <p>
            новые границы настолько важной для всех нас культуры, давно и надолго интегрированной в нашу ДНК.
            Мы здесь, чтобы становиться лучше и мотивировать друг друга на победу. Чтобы наши голоса зазвучали
            как никогда громко! Мы здесь, чтобы премия «КАРДО» вошла в историю!
          </p>
        </div>
      </div>
      <div className={styles.video}>
        <iframe
          title="Youtube player"
          frameBorder="0"
          sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
          src={`https://youtube.com/embed/${youtubeID}?autoplay=0`}></iframe>
      </div> 
    </>
  )
}
