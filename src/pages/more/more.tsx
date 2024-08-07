import React from "react";
import styles from "./more.module.css";
import { SubHeader } from '../../components/subHeader/subHeader'
import { SubMenu, TLinks } from '../../components/subMenu/subMenu'

export const More: React.FC = () => {

  const navLinks: TLinks[] = [
    { name: 'Партнеры', url: '/more/partners' },
    { name: 'Контакты', url: '/more/contacts' },
    { name: 'Направления', url: '/more/destinations' },
    { name: 'Новости', url: '/more/news' },
    { name: 'Документы', url: '/more/documents' },
    { name: 'Ресурсы', url: '/more/resources' },
    { name: 'Люди и факты', url: '/more/peopleAndFacts' }
  ]

  return (
    <>
      <SubHeader title={"Еще"}/>
      <SubMenu links={navLinks} />
    </>
  )
}