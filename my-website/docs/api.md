---
sidebar_position: 2
---
# API Integration Details

This document outlines how external APIs are integrated into the project, covering how data is fetched, updated, and managed within the application. The approach leverages modern tools like React Query and Axios to handle asynchronous requests, caching, and error handling.

## Overview

The API integration involves:
- **Fetching Data:** Retrieving live data from external endpoints.
- **Auto-Updating:** Automatically refreshing data at set intervals.
- **Caching:** Minimizing redundant requests using React Query’s caching mechanism.
- **Error Handling:** Managing failed requests gracefully to maintain a smooth user experience.

## Fetching Data with React Query

React Query simplifies data fetching and state management. Below is an example of how to fetch live cryptocurrency prices from an external API:

```tsx
import { useQuery } from '@tanstack/react-query';

const fetchPrices = async () => {
  const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,ripple,cardano,solana&vs_currencies=usd');
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

const { data, error, isLoading, refetch } = useQuery(['cryptoPrices'], fetchPrices, {
  refetchInterval: 60000, // Auto-refresh every 60 seconds
});
```

### Key Points:
- **Endpoint:** Data is fetched from the CoinGecko API, which provides live cryptocurrency prices.
- **Auto-Refresh:** The `refetchInterval` option triggers a data refresh every 60 seconds.
- **Error Handling:** Any errors during the fetch process are caught and can be handled accordingly.
- **Manual Refresh:** In addition to automatic updates, you can allow users to manually refresh data:
  
  ```tsx
  <button onClick={() => refetch()}>Refresh Prices</button>
  ```

## Advanced Data Fetching with Axios

For more robust configurations and additional features like interceptors or custom headers, you might use Axios. Here’s an example:

```tsx
import axios from 'axios';

const fetchData = async () => {
  const { data } = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
    params: {
      ids: 'bitcoin,ethereum,ripple,cardano,solana',
      vs_currencies: 'usd',
    },
  });
  return data;
};
```

You can integrate this with React Query similarly:

```tsx
import { useQuery } from '@tanstack/react-query';

const { data, error, isLoading } = useQuery(['cryptoPrices'], fetchData, {
  refetchInterval: 60000,
});
```

## Conclusion

By leveraging React Query and Axios, the project ensures:
- **Efficient Data Fetching:** With minimal redundant API calls.
- **Responsive UI:** Through both automatic and manual data refreshing.
- **Robust Error Handling:** To provide a better user experience even when issues occur.

This setup provides a scalable and maintainable way to integrate and manage API data within your project.
```