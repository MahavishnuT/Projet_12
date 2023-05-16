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

function BarChartActivity({ activity }) {
  const formatXAxis = (tickItem) => {
    return tickItem + 1
  }

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
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" tickLine={false} axisLine={false} tickFormatter={formatXAxis}/>
          <YAxis
            dataKey="calories"
            orientation="right"
            type="number"
            domain={[0, 'dataMax + 50']}
            fill="#9B9EAC"
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
