import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import './barchart.scss'
import PropTypes from 'prop-types'


function BarChartActivity({ activity }) {
  // Handle "undefined" error
  if (!activity) {
    return null
  }

  // Creating a custom tooltip
  let tooltip
  const CustomTooltip = ({ active, payload }) => {
    if (!active || !tooltip) {
      return null
    } else {
      return (
        <div className="tooltip-barchart">
          <div className="tooltip-barchart-kilogram">{payload[0].value} kg</div>
          <div className="tooltip-barchart-calories">
            {payload[1].value} Kcal
          </div>
        </div>
      )
    }
  }

  return (
    <div className="barChartActivity">
      <p className="title-graph-barchart">Activité quotidienne</p>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={activity}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid vertical={false} horizontal={false} />
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tickFormatter={(day) => day.slice(-1)}
          />

          <YAxis
            yAxisId="right"
            dataKey="kilogram"
            orientation="right"
            type="number"
            domain={['dataMin - 10', 'dataMax + 10']}
            tickLine={false}
            tickCount={4}
            axisLine={false}
          />
          <YAxis
            yAxisId="left"
            hide={true}
            dataKey="calories"
            orientation="right"
            type="number"
            domain={['dataMin - 10', 'dataMax + 10']}
            tickLine={false}
            tickCount={4}
            axisLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            verticalAlign="top"
            height={36}
            align="right"
            iconType="circle"
          />
          <Bar
            yAxisId="right"
            name="Poids (kg)"
            dataKey="kilogram"
            fill="#282D30"
            barSize={7}
            radius={3}
            stackId="b"
            minPointSize={10}
            onMouseOver={() => (tooltip = 'kilogram')}
          />
          <Bar
            yAxisId="left"
            name="Calories brûlées (kCal)"
            dataKey="calories"
            fill="#E60000"
            barSize={7}
            radius={3}
            stackId="a"
            maxBarSize={80}
            onMouseOver={() => (tooltip = 'calories')}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarChartActivity

BarChartActivity.propTypes = {
  activity: PropTypes.array
}
