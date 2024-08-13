import React from "react";
import logoRectangle from "../../assets/icons/icon-logo-rectangle.svg"
import styles from "./logoRectangle.module.css"

export const LogoRectangle: React.FC = () => {

  return (
    <>
      <img className={styles.logo} src={logoRectangle} alt="лого Кардо"/>
    </>
  )
}




