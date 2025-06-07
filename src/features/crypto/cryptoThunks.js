import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCryptoData } from "../../api/coingecko"

export const fetchCryptoPrices = createAsyncThunk(
  'crypto/fetchPrices',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchCryptoData();
      
      // Process data for current prices view
      const currentPrices = data.map(coin => ({
        id: coin.id,
        symbol: coin.symbol,
        name: coin.name,
        current_price: coin.current_price,
        market_cap: coin.market_cap,
        price_change_percentage_24h: coin.price_change_percentage_24h,
        last_updated: coin.last_updated,
        last_synced: new Date().toISOString()
      }));
      
      // Process data for price history view
      const priceHistory = data.map(coin => ({
        timestamp: new Date().toISOString(),
        id: coin.id,
        symbol: coin.symbol,
        name: coin.name,
        internal_ref_code: `REF-${coin.id.toUpperCase()}-${Date.now()}`,
        current_price: coin.current_price,
        market_cap: coin.market_cap,
        price_change_percentage_24h: coin.price_change_percentage_24h
      }));
      
      return { currentPrices, priceHistory };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);