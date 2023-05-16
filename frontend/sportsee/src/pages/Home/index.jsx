import { useEffect, useState } from 'react'
import BarChartActivity from '../../components/BarChart'
import AverageSession from '../../components/LineChart'
import {
  fetchActivity,
  fetchAverage,
  fetchPerformance,
  fetchGeneralData,
} from '../../services'
import { useParams } from 'react-router-dom'
import './home.scss'
import PerformanceChart from '../../components/RadarChart'
import DailyScore from '../../components/PieChart'
import KeyData from '../../components/KeyData'
import calories from '../../assets/calories.svg'
import protein from '../../assets/protein.svg'
import carbs from '../../assets/carbs.svg'
import fat from '../../assets/fat.svg'

function Home() {
  const adaptUserActivity = (userActivity) =>
  userActivity.sessions.map((session) => {
    const formattedDay = new Intl.DateTimeFormat('fr', { day: 'numeric' }).format(
      new Date(session.day)
    );

    return {
      day: +formattedDay,
      kilogram: session.kilogram,
      calories: session.calories,
    };
  });

  const { userId } = useParams()
  const [activityData, setActivityData] = useState({})
  const [averageData, setAverageData] = useState({})
  const [performanceData, setPerformanceData] = useState({})
  const [generalData, setGeneralData] = useState({})
  const [isDataLoading, setDataLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchAllData() {
      setDataLoading(true)

      const { activityData, activityError } = await fetchActivity(userId)
      setActivityData(activityData)

      const { averageData, averageError } = await fetchAverage(userId)
      setAverageData(averageData)

      const { performanceData, performanceError } = await fetchPerformance(
        userId
      )
      setPerformanceData(performanceData)

      const { generalData, generalError } = await fetchGeneralData(userId)
      setGeneralData(generalData)

      setError(
        activityError || averageError || performanceError || generalError
      )
    }
    fetchAllData()
  }, [])

  if (error) {
    return <span>Oups il y a eu un problème</span>
  }

  return (
    <section className="home">
      {!isDataLoading ? (
        <span>The data is loading</span>
      ) : (
        <>
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
              <BarChartActivity activity={adaptUserActivity(activityData.sessions)} />
              <AverageSession average={averageData.sessions} />
              <PerformanceChart performance={performanceData.data} />
              <DailyScore score={generalData.todayScore} />
              <div className="keydatas-container">
                <KeyData
                  picture={calories}
                  unit="kCal"
                  text="Calories"
                  keydata={generalData.keyData}
                />
                <KeyData
                  picture={protein}
                  unit="g"
                  text="Proteines"
                  keydata={generalData.keyData}
                />
                <KeyData
                  picture={carbs}
                  unit="g"
                  text="Glucides"
                  keydata={generalData.keyData}
                />
                <KeyData
                  picture={fat}
                  unit="g"
                  text="Lipides"
                  keydata={generalData.keyData}
                />
              </div>
            </div>
            <div className="kind-container"></div>
          </div>
        </>
      )}
    </section>
  )
}

export default Home
