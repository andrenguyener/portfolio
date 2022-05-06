import { AppProps } from "next/app";
// import { Head } from "next/document";
import { globalFonts } from "./../static/fonts";
import { Layout } from "./../views/layout";
import "../static/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            {/* <Head>
                <title>Andre Nguyen</title>
                <meta property="og:title" content="Andre Nguyen" key="portfolio" />
            </Head> */}
            {globalFonts}
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}
