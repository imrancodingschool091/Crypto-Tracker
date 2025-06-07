import axios from 'axios';


const API_URL = 'https://api.coingecko.com/api/v3/coins/markets';

export const fetchCryptoData = async () => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 15,
        page: 1,
        sparkline: false,
        price_change_percentage: '24h'
      },
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching crypto data:', error);
    
    // Fallback to mock data for development
    return [
      {
        id: 'bitcoin',
        symbol: 'btc',
        name: 'Bitcoin',
        current_price: 43000,
        market_cap: 850000000000,
        price_change_percentage_24h: 2.5,
        last_updated: new Date().toISOString()
      },
      {
        id: 'ethereum',
        symbol: 'eth',
        name: 'Ethereum',
        current_price: 2600,
        market_cap: 320000000000,
        price_change_percentage_24h: -1.2,
        last_updated: new Date().toISOString()
      },
      {
        id: 'binancecoin',
        symbol: 'bnb',
        name: 'BNB',
        current_price: 320,
        market_cap: 50000000000,
        price_change_percentage_24h: 0.8,
        last_updated: new Date().toISOString()
      }
    ];
  }
};