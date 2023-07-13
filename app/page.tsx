import styles from './page.module.css'
import ResultDisplay from './components/ResultDisplay'
import getScoreData from '@/lib/getScoreData'

export default async function Home() {

  const scoreData: Data = JSON.parse( await getScoreData())
  
  return (
    <main className={styles.main}>
      <ResultDisplay {...scoreData}/>
    </main>
  )
}
