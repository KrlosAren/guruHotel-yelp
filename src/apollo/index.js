import { ApolloClient, InMemoryCache } from '@apollo/client';

const API_KEY =
  'TzJsZJG_YNdcwJNbZCPLrM01PlwUGAukOQE52Gm8Pvog1sajR2slYYBxSPpohxBFELPBNLZDc81NiaWwFMIXFg4GgBY_02cMQI4iNh2yi5hVy3gxlncApTM9axITYHYx';

const client = new ApolloClient({
  uri: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/graphql',
  cache: new InMemoryCache(),
  credentials: 'same-origin',
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    'Accept-Language': 'en_US',
  },
});

export default client;
