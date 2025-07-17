import './styles.css'
import Dashboard from './components/Dashboard'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CoinDetail from './components/CoinDetail'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/coin/:id" element={<CoinDetail />} />
      </Routes>
    </Router>
  )
}

export default App