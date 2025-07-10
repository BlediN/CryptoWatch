const SummaryStats = ({ coins }) => {
  const avgPrice = (coins.reduce((acc, c) => acc + c.current_price, 0) / coins.length).toFixed(2)
  const highest = Math.max(...coins.map(c => c.market_cap)).toLocaleString()
  const lowest = Math.min(...coins.map(c => c.market_cap)).toLocaleString()

  return (
    <div className="summary">
      <p>Total Coins: {coins.length} </p>
      <p>Avg Price: ${avgPrice}</p>
      <p>Highest Market Cap: ${highest}</p>
      <p>Lowest Market Cap: ${lowest}</p>
    </div>
  )
}

export default SummaryStats
