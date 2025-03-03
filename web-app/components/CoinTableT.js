/* // CoinTable.jsx
import React, { useState, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import Coin from "./Coin";
import { coinPassed } from "./CoinSearch";
import axios from "axios";

// Fetch function with artificial delay
const fetchCoins = async (page) => {
  // Add a 2-second delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const { data } = await axios.get(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&price_change_percentage=1h,24h,7d&sparkline=true`
  );
  return data;
};

const CoinTable = () => {
  const passedCoinName = useContext(coinPassed);
  const [page, setPage] = useState(1);

  const { data: coins, error, isLoading } = useQuery({
    queryKey: ["coins", page],
    queryFn: () => fetchCoins(page),
    keepPreviousData: true,
  });
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="inline-flex items-center px-4 py-2">
          <svg className="animate-spin h-8 w-8 text-blue-500 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className="text-lg font-medium">Loading cryptocurrency data...</span>
        </div>
      </div>
    );
  }
  
  if (error) return <div>Error loading data</div>;

  // Filter and limit to 5 cryptocurrencies
  const filteredCoins = coins
    .filter(
      (coin) =>
        coin.name.toLowerCase().includes(passedCoinName.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(passedCoinName.toLowerCase())
    )
    .slice(0, 5);

  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <>
      <table className="border-separate [border-spacing:0.75rem]">
        <thead>
          <tr>
            <th className="underline">Rank</th>
            <th className="underline">Icon</th>
            <th className="underline">Name</th>
            <th className="underline">Symbol</th>
            <th className="underline">Price (USD)</th>
            <th className="underline">1hr%</th>
            <th className="underline">24hr%</th>
            <th className="underline">7d%</th>
          </tr>
        </thead>
        <tbody>
          {filteredCoins.map((coin) => (
            <Coin
              key={coin.id}
              id={coin.id}
              marketCapRank={coin.market_cap_rank}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              price={coin.current_price}
              OneHr={coin.price_change_percentage_1h_in_currency}
              TwoFourHr={coin.price_change_percentage_24h_in_currency}
              SevenDays={coin.price_change_percentage_7d_in_currency}
            />
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <button
          className="text-white bg-gray-800 hover:bg-gray-900 px-4 py-2 rounded mr-2"
          onClick={handlePrevPage}
          disabled={page === 1}
        >
          Prev
        </button>
        <span className="mr-2 ml-2">{page}</span>
        <button
          className="text-white bg-gray-800 hover:bg-gray-900 px-4 py-2 rounded ml-2"
          onClick={handleNextPage}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default CoinTable; */