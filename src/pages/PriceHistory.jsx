import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCryptoPrices } from '../features/crypto/cryptoThunks';
import CryptoPriceHistory from '../components/CryptoPriceHistory';

const PriceHistory = () => {
  const dispatch = useDispatch();
  const { priceHistory, loading, error } = useSelector((state) => state.crypto);

  useEffect(() => {
    dispatch(fetchCryptoPrices());
    
    //auto refresh after 30 minutes

    const interval = setInterval(() => {
      dispatch(fetchCryptoPrices());
    }, 30 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Crypto Price History</h1>
      <CryptoPriceHistory 
        data={priceHistory} 
        loading={loading} 
        error={error} 
      />
    </div>
  );
};

export default PriceHistory;