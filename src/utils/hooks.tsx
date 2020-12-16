import React from "react";

export const useIsTopInView = () => {
    const [isTop, setIsTop] = React.useState(true);

    React.useEffect(() => {
        if (window.scrollY <= 300) {
            setIsTop(true);
        } else {
            setIsTop(false);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });
    const handleScroll = () => {
        if (window.scrollY <= 300) {
            if (isTop !== true) {
                setIsTop(true);
            }
        } else {
            if (isTop === true) {
                setIsTop(false);
            }
        }
    };

    return isTop;
};
