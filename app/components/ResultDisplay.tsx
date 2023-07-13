import { Average } from 'next/font/google'
import Styles from '../page.module.css'

type props = {
  params: {
    scoreData: Data[]
  }
}

export default function ResultDisplay({params: {scoreData}}: props) {
  
  let scoreSum: number = 0
  scoreData.map(item => {
    scoreSum += item.score
  })  
  const avgScore: number = Math.floor(scoreSum/4)

  const display = (
    <>
    <div className={Styles.display}>

    <div className={Styles.indicator}>
      <p>Your Result</p>
      <div>
        <h1>{avgScore}</h1>
        <p>of 100</p>
      </div>
      <h1>
        {avgScore>70 ? 'Great': 'Average'}
      </h1>
      <p className={Styles.p}>You scored higher than 65% of the people who have taken these tests.</p>
    </div>
   
    <div className={Styles.summary}>
      <h1>Summary</h1>
      <ul>
        {scoreData.map(item => {
          const category = item.category
          return (
            <li className={`Styles.${category}`}>
            <span>{item.category.toUpperCase()}</span>
            <span>{`${item.score}/100`}</span>
          </li>
          )
        })}

      </ul>
      <button>Continue</button>
    </div>
 
    </div>
    </>

  )

  return display
}
