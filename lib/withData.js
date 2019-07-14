import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
// import { endpoint, prodEndpoint } from '../config';
// import { format } from 'date-fns';
// import { getDateRange } from './getDateRange';

function createClient({ headers }) {
    return new ApolloClient({
        // uri: process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint,
        uri: 'http://localhost:3333/graphql',
        request: operation => {
            operation.setContext({
                fetchOptions: {
                    credentials: 'include',
                },
                headers,
            });
        },
        // local data
        clientState: {
            resolvers: {
                Mutation: {
                },
            },
            defaults: {
                goal: {
                    __typename: "Goal",
                    name: '',
                    sessions: 0,
                    conversions: 0,
                    conversionValue: 0
                }
            },
        },
    });
}

export default withApollo(createClient);
