---
sidebar_position: 4
---
# Challenges & Solutions

Here are some of the key challenges that I encountered and the measures taken to overcome them.

## 1. API Rate Limits

**Challenge:**  
External APIs, such as the CoinGecko API, often impose rate limits that can disrupt data fetching if too many requests are made in a short period.

**Solution:**  
- **Caching with React Query:** Used React Query's caching to reduce redundant API calls.
- **Error Handling:** Implemented error handling to gracefully notify users when the API rate limit is reached.

## 2. State Management Complexity

**Challenge:**  
Balancing local state management with server state while avoiding convoluted code structures was challenging.

**Solution:**  
- **React Query for Remote State:** Used React Query to handle all server-side data fetching and caching.
- **Separation of Concerns:** Modularized state management responsibilities to keep the application maintainable and scalable.

## 3. Error Handling and User Feedback

**Challenge:**  
Handling unexpected errors (e.g., network failures, unexpected API responses) in a way that didn’t disrupt the user experience was a priority.

**Solution:**  
- **Graceful Error Messaging:** Provided user-friendly error messages that inform users of issues without revealing technical details.
- **Monitoring & Logging:** Set up logging and monitoring to capture errors, facilitating rapid troubleshooting and continuous improvement.

