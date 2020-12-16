import { AppProps } from "next/app";
import { globalFonts } from "./../static/fonts";
import { Layout } from "./../views/layout";

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            {globalFonts}
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}
