import React from "react";
import styles from "./welcomeScreen.module.css";
import { LogoRectangle } from '../../components/logoRectangle/logoRectangle'
import { Button } from '../../components/button/button'

export const WelcomeScreen: React.FC = () => {

  return (
    <>
      <div className={styles.container}>
        <LogoRectangle />

        <div className={styles.button_container}>
          <Button type="submit">
            Войти
          </Button>

          <Button type="submit">
            Зарегистрироваться
          </Button>
        </div>
      </div>
    </>
  )
}