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

// const _css = `
//     background-color: #161616;
//     @font-face {
//         font-family: TradeGothic;
//         src: url("/fonts/TradeGothicLTStd.otf");
//     }

//     @font-face {
//         font-family: TradeGothic-Bold;
//         src: url("/fonts/TradeGothic-Bold.otf");
//     }

//     @font-face {
//         font-family: Roboto;
//         src: url("/fonts/Roboto-Regular.ttf");
//     }

//     @font-face {
//         font-family: Roboto-Bold;
//         src: url("/fonts/Roboto-Bold.ttf");
//     }

//     @font-face {
//         font-family: SFMonoRegularWoff;
//         src: url("/fonts/SFMono/SFMono-Regular.woff");
//     }

//     @font-face {
//         font-family: SFMonoRegularWoff2;
//         src: url("/fonts/SFMono/SFMono-Regular.woff2");
//     }

//     @font-face {
//         font-family: SFMonoSemiboldWoff;
//         src: url("/fonts/SFMono/SFMono-Semibold.woff");
//     }

//     @font-face {
//         font-family: SFMonoSemiboldWoff2;
//         src: url("/fonts/SFMono/SFMono-Semibold.woff2");
//     }
// `;

// export const globalFontFamily = (_fonts: FontPath[]) => {
//     // Todo read from a dynamic string
//     // https://github.com/vercel/styled-jsx/issues/322
//     return (
//         <style jsx={true} global={true}>
//             {_css}
//         </style>
//     );
// };

export const globalFonts = (
    <>
        <Head>{preloadFonts(fontPaths)}</Head>
        {/* {globalFontFamily(fontPaths)} */}
    </>
);
