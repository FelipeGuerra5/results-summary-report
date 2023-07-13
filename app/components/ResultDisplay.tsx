import Styles from '../page.module.css'

type props = {
  params: {
    scoreData: Data[]
  }
}

export default function ResultDisplay({params: {scoreData}}: props) {
  scoreData.map(item => console.log(item.score))

  return (
    <>
    <div className={Styles.display}>

    <div className={Styles.indicator}>
      <p>Your Result</p>
      <div>
        <h1>76</h1>
        <p>of 100</p>
      </div>
      <h1>Great</h1>
      <p className={Styles.p}>You scored higher than 65% of the people who have taken these tests.</p>
    </div>
   
    <div className={Styles.summary}>
      <h1>Summary</h1>
      <ul>
        <li className={Styles.reaction}>
          <span>Reaction</span>
          <span>80/100</span>
        </li>
        <li className={Styles.memory}>
          <span>Memory</span>
          <span>80/100</span>
        </li>
        <li className={Styles.verbal}>
          <span>Verbal</span>
          <span>80/100</span>
        </li>
        <li className={Styles.visual}>
          <span>Visual</span>
          <span>80/100</span>
        </li>
      </ul>
      <button>Continue</button>
    </div>
 
    </div>
    </>
  )
}
