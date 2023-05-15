import { useEffect, useState } from 'react'
import BarChartActivity from '../../components/BarChart'
import AverageSession from '../../components/LineChart'
import { fetchActivity, fetchAverage, fetchDailyScore, fetchPerformance } from '../../services'
import { useParams } from 'react-router-dom'
import "./home.scss"
import PerformanceChart from '../../components/RadarChart'
import DailyScore from '../../components/PieChart'

// function adaptUserActivity(userActivity) {
//   userActivity.map((session) => {
//     const formattedDay = new Intl.DateTimeFormat('fr', {
//       day: 'numeric',
//     }).format(new Date(session.day))

//     return {
//       day: +formattedDay,
//       kilogram: session.kilogram,
//       calories: session.calories,
//     }
//   })
// }

function Home() {
  const { userId } = useParams()
  const [activityData, setActivityData] = useState({})
  const [averageData, setAverageData] = useState({})
  const [performanceData, setPerformanceData] = useState({})
  const [scoreData, setScoreData] = useState({})
  const [isDataLoading, setDataLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchAllData() {
      setDataLoading(true)

      const { activityData, activityError } = await fetchActivity(userId)
      setActivityData(activityData)

      const { averageData, averageError } = await fetchAverage(userId)
      setAverageData(averageData)

      const { performanceData, performanceError } = await fetchPerformance(userId)
      setPerformanceData(performanceData)

      const { scoreData, scoreError } = await fetchDailyScore(userId)
      setScoreData(scoreData)
      console.log(scoreData)

      setError(activityError || averageError || performanceError || scoreError)
    }
    fetchAllData()
  }, [])

  if (error) {
    return <span>Oups il y a eu un problème</span>
  }

  return (
    <section className="home">
      <div className="presentation">
        <div className="presentation-title">
          <h1 className="presentation-title_black">Bonjour</h1>
          <h1 className="presentation-title_red">Thomas</h1>
        </div>
        <span className="presentation-congrats">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </span>
      </div>
      <div className="charts-kind-container">
        <div className="charts-container">
          <BarChartActivity activity={activityData.sessions} />
          <AverageSession average={averageData.sessions} />
          <PerformanceChart performance={performanceData.data} />
          <DailyScore score={scoreData.todayScore} />
        </div>
        <div className="kind-container">DONNées</div>
      </div>
    </section>
  )
}

export default Home
