import Head from "next/head";

type FontPath = {
    name: string;
    path: string;
};

const fontPaths: FontPath[] = [
    {
        name: "TradeGothic",
        path: "/fonts/TradeGothicLTStd.otf",
    },
    {
        name: "TradeGothic-Bold",
        path: "/fonts/TradeGothic-Bold.otf",
    },
    {
        name: "Roboto",
        path: "/fonts/Roboto-Regular.ttf",
    },
    {
        name: "Roboto-Bold",
        path: "/fonts/Roboto-Bold.ttf",
    },
    {
        name: "SFMonoRegularWoff",
        path: "/fonts/SFMono/SFMono-Regular.woff",
    },
    {
        name: "SFMonoRegularWoff2",
        path: "fonts/SFMono/SFMono-Regular.woff2",
    },
    {
        name: "SFMonoSemiboldWoff",
        path: "/fonts/SFMono/SFMono-Semibold.woff",
    },
    {
        name: "SFMonoSemiboldWoff2",
        path: "/fonts/SFMono/SFMono-Semibold.woff2",
    },
];

export const preloadFonts = (fonts: FontPath[]) => {
    return fonts.map((font) => {
        const fontType = font.path.substr(font.path.lastIndexOf(".") + 1);
        return (
            <link
                key={font.name}
                crossOrigin="anonymous"
                rel="preload"
                href={font.path}
                as="font"
                type={`font/${fontType}`}
            />
        );
    });
};

export const globalFonts = <Head>{preloadFonts(fontPaths)}</Head>;
