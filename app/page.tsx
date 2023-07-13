import styles from './page.module.css'
import ResultDisplay from './components/ResultDisplay'

export default function Home() {
  return (
    <main className={styles.main}>
      <ResultDisplay />
    </main>
  )
}
