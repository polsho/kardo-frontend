import React, {InputHTMLAttributes, useState} from "react";
import styles from "./input.module.css"
import clsx from 'clsx'

type TEmailInput = {
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  htmlFor: string;
}

export const Input = ({onChange, type, name, htmlFor, value}: InputHTMLAttributes<HTMLInputElement> & TEmailInput): JSX.Element => {

  const [typeToggle, setTypeToggle] = useState(type);

  const toggleShowPassword = (el: any): void => {
    if (typeToggle === 'password') {
      setTypeToggle('text');
    } else {
      setTypeToggle('password');
    }
    el.classList.toggle(styles.iconEyeHide)
  }

  return (
    <div className={styles.inputContainer}>
      <input
        className={clsx(styles.input, "text_type_main-default", value !== "" ? styles.filledInput : "")}
        type={typeToggle} name={name} required
        onChange={onChange} />
      <label className={clsx(styles.label, "text_type_main-default")} htmlFor={htmlFor}>{htmlFor}</label>
      {type === 'password' ?
        <span className={styles.iconEye} onClick={(evt) => toggleShowPassword(evt.target)}></span>
        : ''
      }
    </div>
  );
}
