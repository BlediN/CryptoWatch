export default function CustomTooltip ({ active, payload, label, chartType }) {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    if (chartType === 'price') {
      return (
        <div className="custom-tooltip">
          <p><strong>{data.name}</strong></p>
          <p>Price: ${data.price.toFixed(2)}</p>
        </div>
      );
    } else if (chartType === 'change') {
      return (
        <div className="custom-tooltip">
          <p><strong>{data.name}</strong></p>
          <p>24h Change: {data.change.toFixed(2)}%</p>
        </div>
      );
    }
  }
  return null;
};
