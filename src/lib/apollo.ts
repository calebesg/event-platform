import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4pixqkj1us201ywc643anur/master',
  cache: new InMemoryCache(),
});
