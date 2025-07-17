import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import CustomTooltip from './CustomTooltip'

export default function ChartChange({ coins }) {
  const data = coins.map(coin => ({
    name: coin.name,
    change: coin.price_change_percentage_24h,
  }))

  return (
    <div style={{ height: 350, margin: '20px 10px' }}>
      <h3>24h Change Chart</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 100, bottom: 10 }} // bottom space for rotated labels
        >
          <XAxis
            dataKey="name"
            angle={-90}
            textAnchor="end"
            interval={0}
            dy={10}
            height={100}
            tick={{ fill: 'red', fontSize: 12 }}
          />
          <YAxis domain={['dataMin', 'dataMax']} tick={{ fill: 'white' }} />
          <Tooltip content={<CustomTooltip chartType="change" />} />
          <Bar dataKey="change" fill="#f6ff00ff" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
