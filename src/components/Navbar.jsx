import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">
            Crypto Tracker
          </Link>
          <div className="flex space-x-4">
            <Link
              to="/current-prices"
              className="px-3 py-2 rounded hover:bg-blue-700 transition"
            >
              Current Prices
            </Link>
            <Link
              to="/price-history"
              className="px-3 py-2 rounded hover:bg-blue-700 transition"
            >
              Price History
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;