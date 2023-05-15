export async function fetchActivity(userId) {
  try {
    const response = await fetch(`http://localhost:3000/user/${userId}/activity`)
    const { data } = await response.json()
    return { activityData: data, activityError: false }
  } catch (err) {
    console.log('===== error =====', err)
    return { activityData: null, activityError: true }
  }
}

export async function fetchAverage(userId) {
    try {
      const response = await fetch(`http://localhost:3000/user/${userId}/average-sessions`)
      const { data } = await response.json()
      return { averageData: data, averageError: false }
    } catch (err) {
      console.log('===== error =====', err)
      return { averageData: null, averageError: true }
    }
  }

export async function fetchPerformance(userId) {
    try {
      const response = await fetch(`http://localhost:3000/user/${userId}/performance`)
      const { data } = await response.json()
      return { performanceData: data, performanceError: false }
    } catch (err) {
      console.log('===== error =====', err)
      return { performanceData: null, performanceError: true }
    }
  }

export async function fetchDailyScore(userId) {
    try {
      const response = await fetch(`http://localhost:3000/user/${userId}`)
      const { data } = await response.json()
      return { scoreData: data, scoreError: false }
    } catch (err) {
      console.log('===== error =====', err)
      return { scoreData: null, scoreError: true }
    }
  }
