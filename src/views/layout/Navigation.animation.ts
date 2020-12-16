import { gsap } from "gsap";
import React from "react";

import { tweens } from "./../../themes/styles/abstracts";

export const animationRefs = () => {
    const elRefs = {
        socialContainer: React.createRef<HTMLDivElement>(),
        verticalBar: React.createRef<HTMLSpanElement>(),
        container: React.createRef<HTMLDivElement>(),
        button: React.createRef<HTMLButtonElement>(),
    };

    const allHorizontalBars = [
        ".navigation__container #bars_horizontal",
        ".navigation__container #bars_horizontal-before",
        ".navigation__container #bars_horizontal-after",
    ];

    const allVerticalBars = [
        ".navigation__container #bars_vertical",
        ".navigation__container #bars_vertical-before",
        ".navigation__container #bars_vertical-after",
    ];

    const horizontalBarsIn = () => {
        return gsap.fromTo(
            [...allHorizontalBars],
            {
                width: 0,
                opacity: 0,
            },
            {
                width: "100%",
                opacity: 1,
                duration: 0.5,
                stagger: 0.3,
            }
        );
    };

    const verticalBarsIn = () => {
        return gsap.fromTo(
            [...allVerticalBars],
            {
                height: 0,
                opacity: 0,
            },
            {
                height: "100%",
                opacity: 1,
                duration: 0.5,
                stagger: 0.3,
            }
        );
    };

    const horizontalBarsOut = () => {
        return gsap.to([...allHorizontalBars], {
            translateX: "100%",
            duration: 0.5,
            stagger: 0.3,
        });
    };

    const verticalBarsOut = () => {
        return gsap.to([...allVerticalBars], {
            translateY: "100%",
            duration: 0.5,
            stagger: 0.3,
        });
    };

    const modalIn = (_topVisible: boolean) => {
        const { socialContainer, verticalBar, container } = elRefs;
        const label = "navigation";
        const timeline = gsap.timeline();
        timeline.set(container.current, { zIndex: 1000, visibility: "visible" });
        return timeline
            .add(horizontalBarsIn(), label)
            .add(verticalBarsIn(), label)
            .add(tweens.slideInLeft(socialContainer.current, {}, { duration: 0.5 }), label)
            .add(tweens.slideInDown(verticalBar.current, {}, { duration: 0.5 }), label)
            .add(tweens.fadeIn(container.current, {}, { duration: 0.25 }), label)
            .add(
                tweens.slideInLeft(
                    ".navigation_link",
                    {},
                    {
                        duration: 0.5,
                        stagger: 0.125,
                        transition: "cubic-bezier(0, 0, 0.23, 1)",
                    }
                ),
                label
            );
    };

    const modalOut = () => {
        const { socialContainer, verticalBar, container } = elRefs;
        const label = "navigation_modal_container";
        const timeline = gsap.timeline();
        timeline.set(container.current, { zIndex: -1 });
        return timeline
            .add(horizontalBarsOut(), label)
            .add(verticalBarsOut(), label)
            .add(tweens.slideRight(socialContainer.current, { duration: 0.5 }), label)
            .add(tweens.slideDown(verticalBar.current, { duration: 0.5 }), label)
            .add(tweens.fadeOut(container.current, {}, { duration: 0.25 }), label)
            .add(
                tweens.slideRight(".navigation_link", {
                    duration: 0.5,
                    stagger: 0.125,
                    transition: "cubic-bezier(0, 0, 0.23, 1)",
                }),
                label
            );
    };

    const buttonFadeIn = () => {
        const { button } = elRefs;
        const label = "button_navigation";
        const timeline = gsap.timeline().set(button.current, { visibility: "visible" });
        return timeline.add(tweens.fadeIn(button.current, {}, { duration: 3 }), label);
    };

    return { elRefs, buttonFadeIn, modalIn, modalOut };
};
