import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';

import withData from '../lib/withData';

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};
        if (Component.getInitialProps){
            pageProps = await Component.getInitialProps(ctx);
        }
        // this exposes query to user
        pageProps.query = ctx.query;
        return { pageProps };
    }

    render() {
        // console.log(this.props);
        
        const { Component, apollo, pageProps } = this.props;

        return (
            <Container>
                <ApolloProvider client={apollo}>
                    <ApolloHooksProvider client={apollo}>
                        <Component {...pageProps} />
                    </ApolloHooksProvider>
                </ApolloProvider>
            </Container>
        )
    }
}
export default withData(MyApp);
// export default MyApp;