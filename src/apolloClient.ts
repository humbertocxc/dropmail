import { ApolloClient, InMemoryCache } from '@apollo/client'
import { VITE_KEY, VITE_URI } from './utils/env/env'

const client = new ApolloClient({
  uri: `${VITE_URI}/${VITE_KEY}`,
  cache: new InMemoryCache(),
})

export default client
