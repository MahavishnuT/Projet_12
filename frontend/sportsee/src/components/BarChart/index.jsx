import React, { PureComponent } from 'react'
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { USER_ACTIVITY } from '../../data/mockedData'
import "./barchart.scss"

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]


// const adaptUserActivity = (userActivity) =>
//   userActivity.sessions.map((session) => {
//     const formattedDay = new Intl.DateTimeFormat('fr', {
//       day: 'numeric',
//     }).format(new Date(session.day))

//     return {
//       day: +formattedDay,
//       kilogram: session.kilogram,
//       calories: session.calories,
//     }
//   })
console.log(data[0].name)
console.log(USER_ACTIVITY[0].sessions)

function BarChartActivity() {
  return (
    <ResponsiveContainer className="activity-container" width="100%" aspect={4}>
      <BarChart
        width={500}
        height={300}
        data={USER_ACTIVITY[0].sessions}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 2" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend className='legend'/>
        <Bar dataKey="kilogram"  fill='#E60000'/>
        <Bar dataKey="calories" fill="#020203" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default BarChartActivity
