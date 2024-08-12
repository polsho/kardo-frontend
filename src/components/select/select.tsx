import React, { SelectHTMLAttributes } from 'react'
import styles from './select.module.css'
import clsx from 'clsx'
import { v4 as uuidv4 } from 'uuid'

type TSelectStyle = 'white' | 'white-red' | 'black' | 'rectangle'

type TSelectProps = {
  options: string[]
  label?: string
  style: TSelectStyle
}

export const Select = ({
  onChange,
  value,
  name,
  id,
  size,
  autoComplete,
  label,
  options,
  style
}: SelectHTMLAttributes<HTMLSelectElement> & TSelectProps): JSX.Element => {

  const styleClass = {
    [styles.whiteSelect]: style === 'white',
    [styles.whiteRedSelect]: style === 'white-red',
    [styles.blackSelect]: style === 'black',
    [styles.rectangle]: style === 'rectangle',
  };

  return (
    <div className={styles.container}>
      {label && (
        <label className={clsx(styles.label, 'text_type_secondary_main')} htmlFor={id}>
          {label}
        </label>
      )}
      <div className={clsx(styles.selectWrapper)}>
        <select
          className={clsx(styles.select, 'text_type_main-default-bold', styleClass)}
          name={name}
          id={id}
          size={size}
          autoComplete={autoComplete}
          onChange={onChange}
          value={value}>
          {options.map(option => {
            return (
              <option value={option} key={option}>
                {option}
              </option>
            )
          })}
        </select>
      </div>
    </div>
  )
}
