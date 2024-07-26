import React from "react";
import styles from './buttonToggle.module.css';
import clsx from 'clsx'

export const ButtonToggle: React.FC = () => {

  return (
    <div className={styles.toggle_container}>
        <label className={styles.toggle}>
          <input type="radio" name="radio" value="participant" checked />
          <span className={clsx(styles.title, "text_type_main-large")}>Участник</span>
        </label>
        <label className={styles.toggle}>
          <input type="radio" name="radio" value="expert" />
          <span className={clsx(styles.title, "text_type_main-large")}>Эксперт</span>
        </label>
    </div>
)
}