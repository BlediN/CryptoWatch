import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import CustomTooltip from './CustTooltip'


export default function ChartPrice({ coins }) {
    const data = coins.map(coin => ({
        name: coin.name,
        price: coin.current_price
    }))

    // Responsive font size based on screen width
    const fontSize = window.innerWidth < 480 ? 8 : window.innerWidth < 768 ? 10 : 12
    const height = window.innerWidth < 480 ? 250 : window.innerWidth < 768 ? 300 : 350

    return (
        <div className="chart-wrapper" style={{ height: height, margin: '10px 0' }}>
            <h3>Current Price Chart</h3>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart 
                data={data}
          margin={{ top: 20, right: 10, left: 0, bottom: 10 }}
        >
                    <Line type="monotone" dataKey="price" stroke="#8884d8" strokeWidth={2} />
                    <XAxis
                        dataKey="name"
                        angle={-90}
                        textAnchor="end"
                        interval={0}
                        dy={10}
                        height={100}
                        tick={{ fill: 'lightgray', fontSize: fontSize }}
                    />
                    <YAxis tick={{ fill: 'white', fontSize: fontSize }} />
                    <Tooltip content={<CustomTooltip chartType="price" />} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
