import React from 'react'
import PropTypes from 'prop-types'
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts'
import "./piechart.scss"

function DailyScore({ score }) {
  // handle "undefined" error
  // if (!score) {
  //   return null
  // }

  const dailyScore = score * 100
  // console.log(dailyScore)

  return (
    <div className="dailyScoreChart">
      <p className="title-daily-score">Score</p>
      <div className="affichage-daily-score">
        <p className="score-pourcentage">{dailyScore}%</p>
        <p className="texte-score"> de votre objectif</p>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          innerRadius="70%"
          outerRadius="70%"
          barSize={10}
          data={dailyScore}
          startAngle={90}
          fill="#FF0000"
          blendStroke
          cx="50%"
          cy="50%"
        >
          <RadialBar
            background
            dataKey="value"
            fill="#FF0000"
            minAngle={15}
            clockWise={false}
            strokeLinecap="round"
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default DailyScore
