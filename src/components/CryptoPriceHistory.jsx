const CryptoPriceHistory = ({ data, loading, error }) => {
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
            <th className="px-4 py-2">Timestamp</th>
            <th className="px-4 py-2">Coin ID</th>
            <th className="px-4 py-2">Symbol</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Internal Ref Code</th>
            <th className="px-4 py-2">Current Price (USD)</th>
            <th className="px-4 py-2">Market Cap (USD)</th>
            <th className="px-4 py-2">24h % Change</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={`${entry.id}-${index}`} className="border-b hover:bg-gray-50">
              <td className="px-4 py-2">{new Date(entry.timestamp).toLocaleString()}</td>
              <td className="px-4 py-2">{entry.id}</td>
              <td className="px-4 py-2 uppercase">{entry.symbol}</td>
              <td className="px-4 py-2">{entry.name}</td>
              <td className="px-4 py-2">{entry.internal_ref_code}</td>
              <td className="px-4 py-2">${entry.current_price.toLocaleString()}</td>
              <td className="px-4 py-2">${entry.market_cap.toLocaleString()}</td>
              <td className={`px-4 py-2 ${entry.price_change_percentage_24h >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {entry.price_change_percentage_24h?.toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoPriceHistory;