const CryptoCurrentPrices = ({ data, loading, error }) => {
  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2">Coin ID</th>
            <th className="px-4 py-2">Symbol</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Current Price (USD)</th>
            <th className="px-4 py-2">Market Cap (USD)</th>
            <th className="px-4 py-2">24h % Change</th>
            <th className="px-4 py-2">Last Updated</th>
            <th className="px-4 py-2">Last Synced</th>
          </tr>
        </thead>
        <tbody>
          {data.map((coin) => (
            <tr key={coin.id} className="border-b hover:bg-gray-50">
              <td className="px-4 py-2">{coin.id}</td>
              <td className="px-4 py-2 uppercase">{coin.symbol}</td>
              <td className="px-4 py-2">{coin.name}</td>
              <td className="px-4 py-2">${coin.current_price.toLocaleString()}</td>
              <td className="px-4 py-2">${coin.market_cap.toLocaleString()}</td>
              <td className={`px-4 py-2 ${coin.price_change_percentage_24h >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {coin.price_change_percentage_24h?.toFixed(2)}%
              </td>
              <td className="px-4 py-2">
                {coin.last_updated ? new Date(coin.last_updated).toLocaleString() : 'N/A'}
              </td>
              <td className="px-4 py-2">
                {coin.last_synced ? new Date(coin.last_synced).toLocaleString() : 'N/A'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoCurrentPrices;