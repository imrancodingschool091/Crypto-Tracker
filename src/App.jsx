import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import CurrentPrices from './pages/CurrentPrices';
import PriceHistory from './pages/PriceHistory';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<CurrentPrices />} />
          <Route path="/current-prices" element={<CurrentPrices />} />
          <Route path="/price-history" element={<PriceHistory />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;