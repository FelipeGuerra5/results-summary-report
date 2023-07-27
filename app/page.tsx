import styles from './page.module.css'
import ResultDisplay from './components/ResultDisplay'
import getScoreData from '@/lib/getScoreData'


export default async function Home() {

  const res: string = await getScoreData()
  const scoreData: Array<Data> = JSON.parse(res)

  return (
    <main className={styles.main}>
      <ResultDisplay params={{ scoreData: scoreData }} />
    </main>
  )
}
