import React, { useState } from 'react'
import styles from "./forgotPassword.module.css";
import { Input } from '../../components/input/input'
import { SubHeader } from '../../components/subHeader/subHeader'
import { Button } from '../../components/button/button'
import { useNavigate } from 'react-router-dom'

export const ForgotPassword: React.FC = () => {

  const [email, setEmail] = useState('')

  const navigate = useNavigate();

  return (
    <>
      <SubHeader title="Привет,&nbsp;Гость!"/>

      <form id="forgotPassword">

        <Input type="email" name="email" required htmlFor="Email" value={email}
               onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                 setEmail(event.target.value)
               }} />

        <div className={styles.button_container}>
          <Button form="forgotPassword" type="submit"
                  onClick={() => {
                    navigate('/')
                  }}
          >
            Сменить пароль
          </Button>
        </div>
      </form>
    </>
  )
}