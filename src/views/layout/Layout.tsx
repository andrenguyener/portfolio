import { ThemeProvider } from "./../../themes";
import { NavigationContextProvider } from "./../../utils";
import { Page } from "./Page";

export const Layout: React.FC = ({ children }) => {
    return (
        <ThemeProvider>
            <NavigationContextProvider>
                <Page>{children}</Page>
            </NavigationContextProvider>
        </ThemeProvider>
    );
};

export default Layout;
