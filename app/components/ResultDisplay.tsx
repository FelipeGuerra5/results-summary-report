import Styles from '../page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import reaction from '../../public/assets/images/icon-reaction.svg'
import memory from '../../public/assets/images/icon-memory.svg'
import verbal from '../../public/assets/images/icon-verbal.svg'
import visual from '../../public/assets/images/icon-visual.svg'

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
          <p>Your Result</p>
          <div>
            <h1>{avgScore}</h1>
            <p>of 100</p>
          </div>
          <h1>
            {avgScore > 70 ? 'Great' : 'Average'}
          </h1>
          <p className={Styles.p}>You scored higher than 65% of the people who have taken these tests.</p>
        </div>

        <div className={Styles.summary}>
          <h1>Summary</h1>
          <ul>
            {scoreData.map(item => {
              const category = item.category
              return (
                <li className={`Styles.${category}`} key={item.category}>
                  <Image src={item.icon} alt={`Picture for ${item.category}`} width={25} height={25}></Image>
                  <span>{item.category.toUpperCase()}</span>
                  <span>{`${item.score}/100`}</span>
                </li>
              )
            })}

          </ul>
          <Link href={'/about'} className={Styles.but}>
            Continue
          </Link>
        </div>

      </div>
    </>

  )

  return display
}
