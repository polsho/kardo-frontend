import React, { TextareaHTMLAttributes } from 'react'
import styles from './textarea.module.css'
import clsx from 'clsx'

type TTextAreaProps = {
  label?: string
}

export const Textarea = ({
  onChange,
  value,
  name,
  id,
  label
}: TextareaHTMLAttributes<HTMLTextAreaElement> & TTextAreaProps): JSX.Element => {
  return (
    <div className={styles.сontainer}>
      {label && (
        <label className={clsx(styles.label, 'text_type_secondary_main')} htmlFor={id}>
          {label}
        </label>
      )}
      <textarea
        className={clsx(styles.text, 'text_type_main-default')}
        name={name}
        id={id}
        value={value}
        cols={40}
        onChange={onChange}
      />
    </div>
  )
}
