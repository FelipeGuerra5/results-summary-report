import Styles from '../page.module.css'
import Link from 'next/link'
import Image from 'next/image'


type props = {
  params: {
    scoreData: Data[]
  }
}

export default function ResultDisplay({ params: { scoreData } }: props) {

  let scoreSum: number = 0
  scoreData.map(item => {
    scoreSum += item.score
  })
  const avgScore: number = Math.round(scoreSum / 4)

  const display = (
    <>
      <div className={Styles.display}>

        <div className={Styles.indicator}>
          <h1 className={Styles.indicator_title}>Your Result</h1>
          <div className={Styles.indicator_circle}>
            <h1 className={Styles.indicator_totalscore}>{avgScore}</h1>
            <p className={Styles.indicator_byhundred}>of 100</p>
          </div>
          <h2 className={Styles.great_avg}>
            {avgScore > 70 ? 'Great' : 'Average'}
          </h2>
          <p className={Styles.indicator_description}>You scored higher than 65% of the people who have taken these tests.</p>
        </div>

        <div className={Styles.summary}>
          <h1 className={Styles.summary_title}>Summary</h1>
          <ul>
            {scoreData.map(item => {
              return (
                <li className={Styles[item.category]} key={item.category}>
                  <Image className={Styles.icon} src={item.icon} alt={`Picture for ${item.category}`} width={15} height={15}></Image>
                  <span className={Styles.hability}>{item.category}</span>
                  <div className={Styles.li_score}>
                    <span className={Styles.points}>{item.score}</span>
                    <span className={Styles.li_score_byhundred}>/100</span>
                  </div>
                </li>
              )
            })}

          </ul>
          <Link href={'/about'} className={Styles.btt}>
            Continue
          </Link>
        </div>

      </div>
    </>

  )
  return display
}
