import React from "react";
import { createGlobalStyle, css, ThemeProvider as StyledThemeProvider } from "styled-components";
import defaultTheme from "./defaultTheme";
import { base, globalStyles, typography } from "./styles";
import { Theme } from "./types";

export const themeConfig = (theme: Theme) => {
    return css`
        ${base(theme)}
        ${typography(theme)}
    `;
};

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
    ${globalStyles}
    ${(props) => themeConfig(props.theme)}
`;

const ThemeProvider: React.FC = ({ children }) => {
    const [theme] = React.useState<Theme>(defaultTheme);
    return (
        <StyledThemeProvider theme={theme}>
            {children}
            <GlobalStyle theme={theme} />
        </StyledThemeProvider>
    );
};

export default ThemeProvider;
