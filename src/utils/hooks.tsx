import React from "react";

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
