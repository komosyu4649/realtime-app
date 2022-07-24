import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {QueryClient, QueryClientProvider} from "react-query"
import { ReactQueryDevtools } from 'react-query/devtools'


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowsFocus: false,
      suspense: true
    }
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  return <QueryClientProvider client={queryClient}>
    <Component {...pageProps} />
    <ReactQueryDevTools initialIsOpen={false} />
  </QueryClientProvider>
}

export default MyApp
