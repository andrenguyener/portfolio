import Head from "next/head";
import { Home } from "./../views";
import { Layout } from "./../views/layout";

const App = () => {
    return (
        <>
            <Head>
                <title>Andre Nguyen</title>
                <meta property="og:title" content="Andre Nguyen" key="portfolio" />
            </Head>
            <Layout>
                <Home />
            </Layout>
        </>
    );
};

export default App;
