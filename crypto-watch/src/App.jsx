import './styles.css'
import Dashboard from './components/Dashboard'

import { Routes, Route } from 'react-router-dom'
import CoinDetail from './components/CoinDetail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/coin/:id" element={<CoinDetail />} />
    </Routes>
  )
}

export default App