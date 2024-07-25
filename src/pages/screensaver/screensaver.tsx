import React from 'react';
import styles from './screensaver.module.css';
import { LogoCircle } from '../../components/logoCircle/logoCircle';
import clsx from 'clsx';

export const Screensaver: React.FC = () => {

  return (
    <>
      <div className={styles.container}>
        <LogoCircle/>
        <p className={clsx(styles.heading, 'text_type_heading-main')}>Добро пожаловать!</p>
      </div>
    </>
  )
}

