import React from "react";

export const useIsTopInView = () => {
    const [isTop, setIsTop] = React.useState(true);

    React.useEffect(() => {
        handleScroll();
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

export const useIsBottomInView = () => {
    const [isBottom, setIsBottom] = React.useState(false);

    React.useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });
    const handleScroll = () => {
        const percent =
            (window.scrollY /
                (document.documentElement.scrollHeight - document.documentElement.clientHeight)) *
            100;
        if (percent > 95) {
            setIsBottom(true);
        } else {
            setIsBottom(false);
        }
    };

    return isBottom;
};
