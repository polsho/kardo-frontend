import React, {ButtonHTMLAttributes, ReactNode} from "react";
import styles from './button.module.css';
import clsx from 'clsx'

type TButton = {
  children: ReactNode;
  isDisabled?: boolean;  
}

export const Button = ({children, isDisabled, onClick, type}: ButtonHTMLAttributes<HTMLButtonElement> & TButton): JSX.Element => {

  return (
    <button className={clsx(styles.button, "text_type_secondary_main")} type={type} disabled={isDisabled} onClick={onClick}>{children}</button>
  );
}