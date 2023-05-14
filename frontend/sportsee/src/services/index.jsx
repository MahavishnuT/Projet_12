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
