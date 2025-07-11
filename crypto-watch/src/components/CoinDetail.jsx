import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const CoinDetail = () => {
  const { id } = useParams()
  const [coin, setCoin] = useState(null)

  useEffect(() => {
    const fetchCoin = async () => {
      const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
      setCoin(res.data)
    }
    fetchCoin()
  }, [id])

  if (!coin) return <p>Loading...</p>

  return (
    <div className="coin-detail">
      <h2>{coin.name} ({coin.symbol.toUpperCase()})</h2>
      <img src={coin.image.large} alt={coin.name} width={100} />
      <p>Current Price: ${coin.market_data.current_price.usd.toLocaleString()}</p>
      <p>Market Cap: ${coin.market_data.market_cap.usd.toLocaleString()}</p>
      <p>24h Change: {coin.market_data.price_change_percentage_24h.toFixed(2)}%</p>
      <p dangerouslySetInnerHTML={{ __html: coin.description.en.split('. ')[0] + '.' }} />
    </div>
  )
}

export default CoinDetail
