import React from "react";
import styles from './buttonToggle.module.css';
import clsx from 'clsx'

export const ButtonToggle: React.FC = () => {

  return (
    <div className={styles.toggle_container}>
        <label className={styles.toggle}>
          <input id="on" type="radio" name="radio" value="participant" checked
                 onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                   // toggleButton(event.target)
                   //Написать функцию для переключения состояния(значение должно отправляться вместе с формой register как отдельное поле)
                 }}/>
          <span className={clsx(styles.title, "text_type_main-large")}>Участник</span>
        </label>
        <label id="off" className={styles.toggle}>
          <input type="radio" name="radio" value="expert" />
          <span className={clsx(styles.title, "text_type_main-large")}>Эксперт</span>
        </label>
    </div>
)
}