import { useQuery } from "@tanstack/react-query";
import axios from "axios";

/**
 * Fetches coin data from API with error handling
 * @param {number} page - Page number for pagination
 * @returns {Promise<Array>} Array of coin data
 * @throws {Error} If the API request fails
 */
const fetchCoins = async (page: number) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&price_change_percentage=1h,24h,7d&sparkline=true`
    );
    return data;
  } catch (error: any) {
    console.error("Error fetching coins:", error);
    throw new Error(error.response?.data?.message || "Failed to fetch coin data.");
  }
};

/**
 * Custom hook for fetching and managing coin data in React Query v5
 * @param {number} page - Current page number
 * @returns {Object} Contains coins data, loading, and error states
 */
export const useCoins = (page: number) => {
  return useQuery({
    queryKey: ["coins", page],
    queryFn: () => fetchCoins(page),
    retry: 3, // Automatically retry failed requests up to 3 times
    staleTime: 60000, // Cache data for 60 seconds before refetching
    placeholderData: (previousData) => previousData, // Keeps previous data
  });
};
