import React, { FC, PropsWithChildren, ReactNode } from 'react'
import PropTypes from 'prop-types'
import styles from './layout.module.css'
import { Button } from '../../components/button/button'
import { Header } from '../../components/header/header'
import { Footer } from '../../components/footer/footer'

type TLayoutProps = {
  children: ReactNode
  header?: boolean
  footer?: boolean
}

export const Layout: FC<TLayoutProps> = ({ children, header = true, footer = true }) => {
  return (
    <>
      {header && <Header />}
      <main className={styles.container}>{children}</main>
      {footer && (
        <div className={styles.footer}>
          <Footer />
        </div>
      )}
    </>
  )
}
