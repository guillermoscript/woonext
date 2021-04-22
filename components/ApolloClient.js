import fetch from 'node-fetch';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import clientConfig from '../client-config';

const client = new ApolloClient({
    uri: clientConfig.graphQlUrl,
    fetch: fetch,
    cache: new InMemoryCache()
})

export default client