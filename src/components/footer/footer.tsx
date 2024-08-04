import styles from './footer.module.css'
import { footerIcons } from '../../assets/icons/footer-icons'
import { FooterButton} from '../footerButton/footerButton'
import { v4 as uuidv4 } from 'uuid';

export function Footer() {
  const footerButtons: string[] = ['Главная', 'Лента', 'Эвенты', 'Конкурсы', 'Еще']
  const paths: string[] = ['/', '/newsFeed', '/events', '/contest', '/more']

  return (
    <div className={styles.container}>
      {footerButtons.map((button, index) => {
        return (
          <FooterButton icon={footerIcons[index]} goTo={paths[index]} key={uuidv4()}>
            {button}
          </FooterButton>
        )
      })}
    </div>
  )
}
