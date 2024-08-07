import React, { InputHTMLAttributes, useState } from 'react'
import styles from './directionCheck.module.css'
import clsx from 'clsx'
import { v4 as uuidv4 } from 'uuid'

type TDirectionCheckProps = {
    option: string
}


  export const DirectionCheck = ({onChange, id, value, checked, option}: InputHTMLAttributes<HTMLInputElement> & TDirectionCheckProps): JSX.Element => {
  
    return (
       <div className={styles.container}>
        <label className={clsx(styles.label, "text_type_secondary_main")} htmlFor={option}>{option}</label>
        <input
          className={clsx(styles.input, "text_type_main-default")}
          id={id}
          type="checkbox" name={option}
          value={value}
          onChange={onChange} 
          checked={checked}/>
      </div>
    );
  }
