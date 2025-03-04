---
sidebar_position: 2
---
# API Integration Details

This document outlines how external APIs are integrated into the project, covering how data is fetched, updated, and managed within the application. Modern tools like React Query and Axios to handle asynchronous requests, caching, and error handling.

## Overview

The API integration involves:
- **Fetching Data:** Retrieving live data from external endpoints.
- **Auto-Updating:** Automatically refreshing data at set intervals.
- **Caching:** Minimizing redundant requests using React Query’s caching mechanism.
- **Error Handling:** Managing failed requests gracefully to maintain a smooth user experience.

## Promise

```tsx
const fetchCoins = async (page) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 1000)); // 
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&price_change_percentage=1h,24h,7d&sparkline=true`
    );
    return data;
  } catch (error) {
    console.error("Error fetching coins:", error);
    throw new Error(error.response?.data?.message || "Failed to fetch coin data.");
  }
};

```
### How the Promise Works

- This introduces a delay of 1 second before making the API request, simulating a loading state.
- Axios is used to make an HTTP GET request to the CoinGecko API.
- Ensures that the function waits for the API response before proceeding.
- If the request fails, the error is caught, logged, and thrown for further handling.

### Key Points:

- **Endpoint:** Data is fetched from the CoinGecko API, which provides live cryptocurrency prices.
- **Error Handling:** Any errors during the fetch process are caught and can be handled accordingly.
- **Manual Refresh:** Users can manually trigger a refresh to fetch the latest data.
- **Promise Handling:** Ensures that API requests do not block UI updates, maintaining responsiveness.

By leveraging Promises and modern API handling techniques, we ensure a smooth, efficient, and scalable data-fetching experience within the application.

