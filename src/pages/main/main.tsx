import React from 'react'
import styles from './main.module.css'
import { Header } from '../../components/header/header'
import { Button } from '../../components/button/button'
import kardoImage from '../../assets/images/kardo-main-page.png'
import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'

export const Main: React.FC = () => {
  const navigate = useNavigate()

  function handleClick() {
    navigate('/profile')
  }

  return (
    <>
      <div className={styles.container}>
        <Header />
        <img src={kardoImage} alt="прыгающий мужчина и надпись free running" className={styles.image} />
        <div className={styles.mainSection}>
          <div className={styles.header}>
            <h1 className={clsx(styles.title, 'text_type_heading-main')}>КАРДО [ 7 ]</h1>
            <p className={clsx(styles.text, 'text_type_secondary_main')}>
              Регистрация на национальные и региональные этапы!
            </p>
            <Button onClick={handleClick}>Подать заявку</Button>
          </div>
          <ul className="cards">
            <li>
              <h2 className={styles.cardTitle}>Наша миссия</h2>
              <p className={styles.cardText}>
                Мир «КАРДО» полон возможностей для людей улиц. В нем удивительным образом переплетены сотни
                историй и судеб. И все стало возможным благодаря вам.
              </p>
            </li>
            <li>
              <h2 className={styles.cardTitle}>Цели кардо</h2>
              <p className={styles.cardText}>
                Поиск, поддержка и продюсирование талантливых людей в области уличной культуры и спорта, а
                также информирование мирового общества о самых интересных организациях, проектах и людях из
                индустрии улиц.
              </p>
            </li>
          </ul>
        </div>
        <div className={styles.AboutUsSection}></div>
      </div>
    </>
  )
}
