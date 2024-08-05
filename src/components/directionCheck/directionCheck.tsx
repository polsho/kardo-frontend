import React, { InputHTMLAttributes, useState } from 'react'
import styles from './directionCheck.module.css'
import clsx from 'clsx'
import { v4 as uuidv4 } from 'uuid'

type TDirectionCheckProps = {
    option: string
}


  export const DirectionCheck = ({onChange, id, name, value, option}: InputHTMLAttributes<HTMLInputElement> & TDirectionCheckProps): JSX.Element => {
  
    return (
       <div className={styles.container}>
        <input
          className={clsx(styles.input, "text_type_main-default")}
          id={id}
          type="checkbox" name={name}
          onChange={onChange} />
 
        <label className={clsx(styles.label, "text_type_secondary_main")} htmlFor={option}>{option}</label>
      </div>
    );
  }
