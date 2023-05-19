import {
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_MAIN_DATA,
  USER_PERFORMANCE,
} from '../data/mockedData'

const numericDayToString = {
  1: 'L',
  2: 'M',
  3: 'M',
  4: 'J',
  5: 'V',
  6: 'S',
  7: 'D',
}

/**
 * Changes the index numbers to the days of the week on the Average Chart
 * @param {Array} userAverageSessions
 * @returns
 */
const adaptUserAverageSessions = (userAverageSessions) =>
  userAverageSessions.sessions.map((session) => ({
    day: numericDayToString[session.day],
    sessionLength: session.sessionLength,
  }))

const kindTranslated = {
  1: 'Cardio',
  2: 'Energie',
  3: 'Endurance',
  4: 'Force',
  5: 'Vitesse',
  6: 'Intensité',
}

/**
 * Translate in french the data kind on the Score Chart
 * @param {Array} userPerformance
 * @returns
 */
const adaptPerformanceKind = (userPerformance) =>
  userPerformance.data.map((data) => ({
    value: data.value,
    kind: kindTranslated[data.kind],
  }))

/**
 * All the functions below retrieve the data from either the api or the mockedData.js file if the api is not running
 * @param {number} userId
 * @returns
 */
export async function fetchActivity(userId) {
  try {
    const response = await fetch(
      `http://localhost:3000/user/${userId}/activity`
    )
    const { data } = await response.json()

    return { activityData: data, activityError: false }
  } catch (err) {
    console.log('===== error =====', err)
    return {
      activityData: USER_ACTIVITY.filter(
        (user) => user.userId === parseInt(userId)
      )[0],
      activityError: true,
    }
  }
}

export async function fetchAverage(userId) {
  try {
    const response = await fetch(
      `http://localhost:3000/user/${userId}/average-sessions`
    )
    const { data } = await response.json()
    const adaptedAverageData = adaptUserAverageSessions(data)
    return { averageData: adaptedAverageData, averageError: false }
  } catch (err) {
    console.log('===== error =====', err)
    return {
      averageData: adaptUserAverageSessions(
        USER_AVERAGE_SESSIONS.filter(
          (user) => user.userId === parseInt(userId)
        )[0]
      ),
      averageError: true,
    }
  }
}

export async function fetchPerformance(userId) {
  try {
    const response = await fetch(
      `http://localhost:3000/user/${userId}/performance`
    )
    const { data } = await response.json()
    const adaptedPerformanceData = adaptPerformanceKind(data)
    return { performanceData: adaptedPerformanceData, performanceError: false }
  } catch (err) {
    console.log('===== error =====', err)
    return {
      performanceData: adaptPerformanceKind(
        USER_PERFORMANCE.filter((user) => user.userId === parseInt(userId))[0]
      ),
      performanceError: true,
    }
  }
}

export async function fetchGeneralData(userId) {
  try {
    const response = await fetch(`http://localhost:3000/user/${userId}`)
    const { data } = await response.json()
    return { generalData: data, generalError: false }
  } catch (err) {
    console.log('===== error =====', err)
    return {
      generalData: USER_MAIN_DATA.filter(
        (user) => user.id === parseInt(userId)
      )[0],
      generalError: true,
    }
  }
}
