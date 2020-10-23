export default `
html,
body {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

html {
    font-size: 12px;
}

body {
    font-size: 24px;
}


h1,
h2,
h3,
h4,
h5,
h6 {
    font-weight: 600;
    letter-spacing: 0.008em;

    strong {
        font-weight: 700;
    }
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
span,
ol,
ul,
li {
    position: relative;
    margin: 0;
    font-size: 1em;
    line-height: 1.25;
}

span {
    display: inline-block;
}

br {
    display: block;
    height: 3rem;
    margin: 0;
    line-height: 3rem;
}

hr {
    position: relative;
    display: block;
    height: 1rem;
    margin: 0;
    border: 0;
}
hr::before {
    position: absolute;
    top: 0.375rem;
    left: 0;
    width: 100%;
    height: 0.125rem;
    content: "";
}

code {
    font-size: 0.85em;
}
`;
