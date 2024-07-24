import React, {ButtonHTMLAttributes, ReactNode} from "react";
import styles from './button.module.css';

type TButton = {
  children: ReactNode;
}

export const Button = ({children, type}: ButtonHTMLAttributes<HTMLButtonElement> & TButton): JSX.Element => {

  return (
    <button className={styles.button} type={type}>{children}</button>
  );
}