import React from 'react'
import PropTypes from 'prop-types'
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts'
import './piechart.scss'

function DailyScore({ score }) {
  // Handle "undefined" error
  if (!score) {
    return null
  }
  
  const dailyScore = score * 100
  // Adapting data that way so the Radial Chart can display them out of a 100
  const data = [
    {
      score: 100 - dailyScore,
      fill: 'transparent',
    },
    {
      score: dailyScore,
      fill: 'red',
    },
  ]

  return (
    <div className="radialchart">
      <span className="radialchart-score">Score</span>
      <div className="radialchart-text">
        <h2 className="radialchart-text_title">{dailyScore}%</h2>
        <span className="radialchart-text_description">de votre objectif</span>
      </div>

      <ResponsiveContainer
        className="radialchart-graph"
        width="100%"
        height="100%"
      >
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

DailyScore.propTypes = {
  score : PropTypes.number
}
