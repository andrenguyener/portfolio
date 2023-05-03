import React, { createContext, useState } from "react";

interface NavigationProps {
    isActive: boolean;
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

// tslint:disable-next-line:no-object-literal-type-assertion
export const NavigationContext = createContext<NavigationProps>({} as NavigationProps);

export const NavigationContextProvider: React.FC<React.PropsWithChildren> = (props) => {
    const [isActive, setIsActive] = useState(false);

    const navigationContext = { isActive, setIsActive };

    return (
        <NavigationContext.Provider value={navigationContext}>
            {props.children}
        </NavigationContext.Provider>
    );
};

export const { Consumer: NavigationContextConsumer } = NavigationContext;

export default {
    NavigationContext,
    NavigationContextProvider,
    NavigationContextConsumer,
};
