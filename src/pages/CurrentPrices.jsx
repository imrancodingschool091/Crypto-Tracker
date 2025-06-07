import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCryptoPrices } from '../features/crypto/cryptoThunks';
import CryptoCurrentPrices from '../components/CryptoCurrentPrices';

const CurrentPrices = () => {
  const dispatch = useDispatch();
  const { currentPrices, loading, error, lastSynced } = useSelector(
    (state) => state.crypto
  );

  useEffect(() => {
    dispatch(fetchCryptoPrices());
    
    // Set up interval for auto-refresh every 30 minutes
    const interval = setInterval(() => {
      dispatch(fetchCryptoPrices());
    }, 30 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Current Crypto Prices</h1>
      <div className="mb-4 text-sm text-gray-600">
        Last synced: {lastSynced ? new Date(lastSynced).toLocaleString() : 'Never'}
      </div>
      <CryptoCurrentPrices 
        data={currentPrices} 
        loading={loading} 
        error={error} 
      />
    </div>
  );
};

export default CurrentPrices;