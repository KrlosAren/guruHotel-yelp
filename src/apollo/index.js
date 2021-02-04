import { ApolloClient, InMemoryCache } from '@apollo/client';

const API_KEY =
  'Fz2Ih6jEB9oJ2PEAIMTE3RWX16vqG1X9yHXIDZjEz809xmu0habmkR1Fh-93WeFZAnhFxXLzJgeJVOzHqjeS4lOITfAztpsdnPoN87a82Gmtpd955YSv5hcMrxYaYHYx';

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
