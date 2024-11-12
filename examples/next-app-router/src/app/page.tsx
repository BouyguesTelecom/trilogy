import { Title } from '@trilogy-ds/react/components/title'
import styles from './page.module.css'
export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Title>Je suis un titre SSR</Title>
      </main>
    </div>
  )
}
