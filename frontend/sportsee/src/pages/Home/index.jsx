import { useEffect, useState } from 'react'
import BarChartActivity from '../../components/BarChart'

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
  const [activityData, setActivityData] = useState({})
  const [isDataLoading, setDataLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchActivity() {
      setDataLoading(true)
      try {
        const response = await fetch(`http://localhost:3000/user/12/activity`)
        const { activityData } = await response.json()
        setActivityData(activityData)
        console.log(activityData)
      } catch (err) {
        console.log('===== error =====', err)
        setError(true)
      } finally {
        setDataLoading(false)
      }
    }
    fetchActivity()
  }, [])

  if (error) {
    return <span>Oups il y a eu un problème</span>
  }

  return <BarChartActivity activity={activityData.sessions} />
}

export default Home
