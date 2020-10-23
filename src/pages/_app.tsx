import { AppProps } from "next/app";
import "./../static/fonts.css";

export default function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
