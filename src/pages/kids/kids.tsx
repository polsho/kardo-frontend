import React from "react";
import styles from "./kids.module.css";
import clsx from 'clsx'
import { Ticker } from '../../components/ticker/ticker'
import linkPhoto from '../../assets/images/kardo-kids.jpg'

export const Kids: React.FC = () => {

  return (
    <div className={styles.page_container}>
      <h1 className={clsx(styles.title, 'text_type_heading-main')}>КАРДО - ДЕТИ</h1>

      <img className={styles.media} src={linkPhoto} alt="Кардо-дети" />

      <p className={clsx(styles.text, 'text_type_main-default')}>
        Улицы сегодня — это узнаваемые бренды, спортсмены и атлеты, танцоры, деятели культуры, перспективные
        общественные проекты.
        До этого момента <span className={styles.text_accent}>КАРДО</span> поддерживало всех представителей Уличной Культуры старше 16 лет, живущих и болеющих своим
        делом. Но время идёт. Вы просили — мы услышали!
        1 сезон Всероссийской конкурс-премии Уличной Культуры и спорта среди детей и молодежи <span className={styles.text_accent}>«КАРДО-ДЕТИ»</span> даёт свой
        старт. Мы отберём лучших по каждому из представленных направлений, которые будут бороться за звание победителя
        соревнований <span className={styles.text_accent}>КАРДО.</span>
        Чтобы принять участие — регистрируйся на нашем сайте и подавай заявку в личном кабинете в разделе <span className={styles.text_accent}>КАРДО-ДЕТИ.</span>
      </p>

      <div className="element_beyond_padding">
        <Ticker text="улица начинается здесь" />
      </div>

    </div>
  )
}