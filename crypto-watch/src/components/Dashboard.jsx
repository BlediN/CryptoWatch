import { useEffect, useState } from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'
import FilterSlider from './FilterSlider'
import SummaryStats from './SummaryStats'

const Dashboard = () => {
  const [coins, setCoins] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [minChange, setMinChange] = useState(-100)

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
          vs_currency: 'usd',
          order: 'market_cap_desc',
          per_page: 20,
          page: 1,
          sparkline: false
        }
      })
      setCoins(res.data)
    }
    fetchData()
  }, [])

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    coin.price_change_percentage_24h >= minChange
  )

  return (
    <div className="dashboard">
      <SummaryStats coins={filteredCoins} />
      <SearchBar setSearchTerm={setSearchTerm} />
      <FilterSlider minChange={minChange} setMinChange={setMinChange} />
      <div className="coin-list">
        {filteredCoins.map(coin => (
          <div key={coin.id} className="coin-row">
            <img src={coin.image} alt={coin.name} />
            <span>{coin.name}</span>
            <span>${coin.current_price.toFixed(2)}</span>
            <span>MC: ${coin.market_cap.toLocaleString()}</span>
            <span>24h: {coin.price_change_percentage_24h.toFixed(2)}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard
