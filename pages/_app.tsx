import { QueryClient, QueryClientProvider } from '../web-app/node_modules/@tanstack/react-query/build/legacy'
import '../styles/globals.css'

// Create a client
const queryClient = new QueryClient()

function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default App