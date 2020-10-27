import React from "react";

import * as constants from "./constants";

export const useIsPageLoaded = () => {
    const [showContent, setShowContent] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            setShowContent(true);
        }, constants.LOADING_TIME);
    }, []);

    return showContent;
};

export const useIsTopInView = () => {
    const [isTop, setIsTop] = React.useState(true);

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    const handleScroll = () => {
        if (window.scrollY <= 300) {
            if (!isTop) {
                setIsTop(true);
            }
        } else {
            if (isTop) {
                setIsTop(false);
            }
        }
    };

    return isTop;
};
