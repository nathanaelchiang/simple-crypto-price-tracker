---
sidebar_position: 3
---
# State Management

## Overview
This project uses **React Query** to manage state, specifically for fetching and caching cryptocurrency market data from the CoinGecko API. Additionally, React's built-in **useState** and **useContext** are used for handling local component state and search filtering.

## Why React Query?
React Query was chosen for the following reasons:
1. **Automatic Caching and Background Fetching**: React Query caches previously fetched cryptocurrency data, reducing redundant API calls while keeping data fresh.
2. **Pagination Support**: The query key pattern `['coins', page]` enables efficient pagination, reducing memory usage and API rate limit concerns.
3. **Retry and Error Handling**: Automatic retries (`retry: 3`) and user-friendly error messages ensure better user experience in case of network failures.
4. **Stale Time and Prefetching**: Setting `staleTime: 60000` (1 minute) helps minimize unnecessary re-fetches, while `keepPreviousData: true` ensures smooth pagination by retaining old data during loading.
5. **Simplified Data Fetching**: The `useQuery` hook abstracts API request logic, making components cleaner and more maintainable.

## State Management Breakdown
### **1. Global Data Fetching with React Query**
- **Fetching Coin Data**
  - Implemented via `useQuery` with `fetchCoins(page)`.
  - Uses `queryKey: ['coins', page]` for pagination.
  - Implements caching, error handling, and automatic refetching.
  
```tsx
const { data: coins = [], error, isLoading, isFetching } = useQuery<CoinAPI[], Error>({
  queryKey: ['coins', page],
  queryFn: () => fetchCoins(page),
  enabled: !!page,
  retry: 2,
  placeholderData: (previousData) => previousData,
});
```

### **2. Local State for Search Filtering**
- Implemented using `useState` and `useContext`.
- `coinPassed` (React Context) is used to pass the search term from `CoinSearch` to `CoinTable`.
- Filters cryptocurrency list before rendering.

```tsx
const [search, setSearch] = useState<string>("");
<coinPassed.Provider value={search}>
  <CoinTable />
</coinPassed.Provider>
```

### **3. Pagination with useState**
- Page state is managed with `useState` in `CoinTable`.
- Uses `setPage(page + 1)` and `setPage(page - 1)` to handle navigation.

```tsx
const [page, setPage] = useState<number>(1);

const handleNextPage = () => {
  if (coins.length === 100) setPage(page + 1);
};

const handlePrevPage = () => {
  if (page > 1) setPage(page - 1);
};
```


