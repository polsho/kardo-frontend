import React, { useState } from 'react'
import styles from './buttonToggle.module.css';
import clsx from 'clsx'

export const ButtonToggle: React.FC = () => {

  const [status, setStatus] = useState('');

  return (
    <div className={styles.toggle_container}>
        <label className={styles.toggle}
               onClick={() => {
                 setStatus('Участник')
               }}
        >
          <input id="on" type="radio" name="radio" value="participant" checked readOnly/>
          <span className={clsx(styles.title, "text_type_main-large")}>Участник</span>
        </label>


        <label id="off" className={styles.toggle}
               onClick={() => {
                 setStatus('Эксперт')
               }}
        >
          <input type="radio" name="radio" value="expert" readOnly/>
          <span className={clsx(styles.title, "text_type_main-large")}>Эксперт</span>
        </label>
    </div>
)
}