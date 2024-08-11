import React from "react";
import styles from "./events.module.css";
import { SubHeader } from "../../components/subHeader/subHeader";
import { Select } from "../../components/select/select";


export const Events: React.FC = () => {
  

  return (
    <>
      <SubHeader title="Что Вас ждет?" />
      <div className={styles.container}>
        <form className={styles.select} action="" id="city">
          <Select
            value={''}
            onChange={() => {}}
            options={['']}
            id="city"
            style={'white-red'}></Select>
        </form>
        
        
       
      </div>
    </>
  )
}