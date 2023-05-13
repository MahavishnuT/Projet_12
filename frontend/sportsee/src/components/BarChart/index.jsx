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


// console.log(USER_ACTIVITY[0].sessions)

function BarChartActivity({activity}) {
  return (
    <ResponsiveContainer className="activity-container" width="100%" aspect={4}>
      <BarChart
        width={500}
        height={300}
        data={activity}
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
