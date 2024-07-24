import React, {InputHTMLAttributes, useState} from "react";
import styles from "./input.module.css"

type TEmailInput = {
  htmlFor: string;
}

export const Input = ({onChange, type, name, htmlFor}: InputHTMLAttributes<HTMLInputElement> & TEmailInput): JSX.Element => {

  const [typeToggle, setTypeToggle] = useState(type);

  const toggleShowPassword = (el: any): void => {
    // if (typeToggle === 'password') {
    //   setTypeToggle('text');
    // } else {
    //   setTypeToggle('password');
    // }
    // el.classList.toggle(styles.iconEyeHide)
  }

  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.input}
        type={typeToggle} name={name} required
        onChange={onChange}/>
      <label className={styles.label} htmlFor={htmlFor}>{htmlFor}</label>
      {type === 'password' ?
        <span className={styles.iconEye} onClick={(evt) => toggleShowPassword(evt.target)}></span>
        : ''
      }
      <div className={styles.bar}></div>
    </div>
  );
}
