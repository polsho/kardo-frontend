import React from 'react'
import styles from './notFound.module.css'
import clsx from 'clsx'

export const NotFound: React.FC = () => {

  return (
    <div className={styles.container}>
      <h1 className={clsx(styles.heading, "text_type_heading-main")}>Error 404</h1>
      <p className="text_type_main-default">Такой страницы не существует</p>
    </div>
  )
}