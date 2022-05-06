import { AppProps } from "next/app";
import { globalFonts } from "./../static/fonts";

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            {globalFonts}
            <Component {...pageProps} />
        </>
    );
}
