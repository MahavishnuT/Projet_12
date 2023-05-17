import React from 'react'
import PropTypes from 'prop-types'
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  Legend,
} from 'recharts'
import { Cell, Pie, PieChart } from 'recharts'
import './piechart.scss'

// const performance = 12
// const data01 = [
//   { name: 'Group A', value: performance },

// ];

// const data02 = [
//   { name: 'A1', value: (100 - performance) },

// ];



function DailyScore({score}) {
  // handle "undefined" error
  // if (!score) {
  //   return null
  // }
  const dailyScore = score * 100 
  const data = [
    {
      score: 100-dailyScore,
      fill: 'transparent',
    },
    {
      score: dailyScore,
      fill: 'red',
    },
  ]

  return (
    // <ResponsiveContainer width="100%" height="100%">
    //   <PieChart width={400} height={400}>
    //     <Pie data={data02}  cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d"  />
    //     <Pie data={data01}  cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#cccccc" />
    //   </PieChart>
    // </ResponsiveContainer>
    <div className="radialchart">
      <span className="radialchart-score">Score</span>
      <div className="radialchart-text">
        <h2 className="radialchart-text_title">{dailyScore}%</h2>
        <span className="radialchart-text_description">de votre objectif</span>
      </div>

      <ResponsiveContainer className="radialchart-graph" width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="10%"
          outerRadius={160}
          barSize={10}
          data={data}
          startAngle={90}
          blendStroke
        >
          <RadialBar
            cornerRadius="50%"
            minAngle={50}
            clockWise
            dataKey="score"
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default DailyScore
