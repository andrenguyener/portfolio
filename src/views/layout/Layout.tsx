import { ThemeProvider } from "./../../themes";
import { NavigationContextProvider } from "./../../utils";

export const Layout: React.FC = ({ children }) => {
    return (
        <ThemeProvider>
            <NavigationContextProvider>{children}</NavigationContextProvider>
        </ThemeProvider>
    );
};

export default Layout;
