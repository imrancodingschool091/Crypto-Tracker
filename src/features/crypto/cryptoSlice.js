import { createSlice } from '@reduxjs/toolkit';
import { fetchCryptoPrices } from './cryptoThunks';

const initialState = {
  currentPrices: [],
  priceHistory: [],
  loading: false,
  error: null,
  lastSynced: null
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCryptoPrices.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCryptoPrices.fulfilled, (state, action) => {
        state.loading = false;
        state.currentPrices = action.payload.currentPrices;
        state.priceHistory = action.payload.priceHistory;
        state.lastSynced = new Date().toISOString();
        state.error = null;
      })
      .addCase(fetchCryptoPrices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch crypto data';
      });
  }
});

export const { setLoading, setError } = cryptoSlice.actions;
export default cryptoSlice.reducer;