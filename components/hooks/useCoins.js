import { useQuery } from "../../web-app/node_modules/@tanstack/react-query/build/legacy";
import axios from "axios";

/**
 * Fetches coin data from API
 * @param {number} page - Page number for pagination
 * @returns {Promise<Array>} Array of coin data
 */
const fetchCoins = async (page) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  const { data } = await axios.get(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&price_change_percentage=1h,24h,7d&sparkline=true`
  );
  return data;
};

/**
 * Custom hook for fetching and managing coin data
 * @param {number} page - Current page number
 * @returns {Object} Contains coins data, loading, and error states
 */
export const useCoins = (page) => {
  return useQuery({
    queryKey: ["coins", page],
    queryFn: () => fetchCoins(page),
    keepPreviousData: true,
  });
};