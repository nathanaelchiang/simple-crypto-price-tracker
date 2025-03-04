import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import '../styles/globals.css'

/**
 * @function App
 * @description Wraps the entire application with a QueryClientProvider.
 * @param {Object} props - The properties passed to the application.
 * @param {React.ComponentType} props.Component - The current page component.
 * @param {Object} props.pageProps - The properties specific to the current page.
 * @returns {JSX.Element} The wrapped application component.
 */
const queryClient = new QueryClient()

function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default App