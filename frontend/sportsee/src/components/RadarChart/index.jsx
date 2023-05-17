import React from 'react'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Text
} from 'recharts'
import PropTypes from 'prop-types'
import "./radarchart.scss"

function renderPolarAngleAxis({ payload, x, y, cx, cy, ...rest }) {
  return (
    <Text
      {...rest}
      verticalAnchor="middle"
      y={y + (y - cy) / 2}
      x={x + (x - cx) / 2}
    >
      {payload.value}
    </Text>
  );
}

function PerformanceChart({ performance }) {
  // handle "undefined" error
  if (!performance) {
    return null
  }

  return (
    <div className="radarChartPerformance">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          cx="50%"
          cy="50%"
          data={performance}
          fill="#FFFFFF"
          outerRadius="56%"
          innerRadius="10%"
        >
          <PolarGrid outerRadius={2} />
          <PolarAngleAxis dataKey="kind" axisLine={false} tickLine={false} tick={{ fill: "white", fontSize: 15}} />
          <PolarRadiusAxis axisLine={false} tick={false} />
          <Radar
            cx="50%"
            cy="50%"
            dataKey="value"
            strokeOpacity={0.9}
            fill="#FF0101"
            fillOpacity={0.5}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PerformanceChart
