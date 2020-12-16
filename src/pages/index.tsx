import Head from "next/head";
import { Home } from "./../views";

const App = () => {
    return (
        <>
            <Head>
                <title>Andre Nguyen</title>
                <meta property="og:title" content="Andre Nguyen" key="portfolio" />
            </Head>
            <Home />
        </>
    );
};

export default App;
