import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import CustomTooltip from './CustomTooltip'


export default function ChartPrice({ coins }) {
    const data = coins.map(coin => ({
        name: coin.name,
        price: coin.current_price
    }))

    return (
        <div style={{ height: 350, margin: '10px 0' }}>
            <h3>Current Price Chart</h3>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart 
                data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 10 }} // bottom space for rotated labels
        >
                    <Line type="monotone" dataKey="price" stroke="#8884d8" />
                    <XAxis
                        dataKey="name"
                        angle={-90}
                        textAnchor="end"
                        interval={0}
                        dy={10}
                        height={100}
                        tick={{ fill: 'lightgray', fontSize: 12 }}
                    />
                    <YAxis />
                    <Tooltip content={<CustomTooltip chartType="price" />} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
