import App, { Container } from 'next/app';
import GoalProvider from '../components/GoalProvider'
import ExperimentsProvider from '../components/ExperimentsProvider'

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
                <GoalProvider>
                    <ExperimentsProvider>
                        <Component {...pageProps} />
                    </ExperimentsProvider>
                </GoalProvider>
            </Container>
        )
    }
}
// export default withData(MyApp);
export default MyApp;