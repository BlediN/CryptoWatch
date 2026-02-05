import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import CustomTooltip from './CustTooltip'

export default function ChartChange({ coins }) {
  const data = coins.map(coin => ({
    name: coin.name,
    change: coin.price_change_percentage_24h,
  }))

  // Responsive font size and margins based on screen width
  const fontSize = window.innerWidth < 480 ? 8 : window.innerWidth < 768 ? 10 : 12
  const height = window.innerWidth < 480 ? 250 : window.innerWidth < 768 ? 300 : 350
  const leftMargin = window.innerWidth < 768 ? 20 : 100

  return (
    <div className="chart-wrapper" style={{ height: height, margin: '20px 10px' }}>
      <h3>24h Change Chart</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 10, left: leftMargin, bottom: 10 }}
        >
          <XAxis
            dataKey="name"
            angle={-90}
            textAnchor="end"
            interval={0}
            dy={10}
            height={100}
            tick={{ fill: 'red', fontSize: fontSize }}
          />
          <YAxis domain={['dataMin', 'dataMax']} tick={{ fill: 'white', fontSize: fontSize }} />
          <Tooltip content={<CustomTooltip chartType="change" />} />
          <Bar dataKey="change" fill="#f6ff00ff" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
