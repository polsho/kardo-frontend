import React, {ButtonHTMLAttributes, ReactNode} from "react";
import styles from './button.module.css';
import clsx from 'clsx'

type TButton = {
  children: ReactNode;
}

export const Button = ({children, type}: ButtonHTMLAttributes<HTMLButtonElement> & TButton): JSX.Element => {

  return (
    <button className={clsx(styles.button, "text_type_main-large")} type={type}>{children}</button>
  );
}