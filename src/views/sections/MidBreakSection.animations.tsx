import React from "react";

import { gsap } from "gsap";

import { tweens } from "./../../themes/styles/abstracts";

export const animationsRefs = () => {
    const elRefs = {
        topText: React.createRef<HTMLHeadingElement>(),
        bottomText: React.createRef<HTMLHeadingElement>(),
    } as const;

    const scrollTriggerMidBreakTextTop = (selector: string | Element) => {
        return gsap
            .timeline({
                scrollTrigger: {
                    trigger: selector,
                    start: "top 80%",
                    toggleActions: "play none none none",
                    // once: true,
                },
            })
            .set(selector, { visibility: "visible" })
            .add(tweens.fadeIn(selector, {}, { duration: 0.85, delay: 0.5 }));
    };

    return {
        elRefs,
        scrollTriggerMidBreakTextTop,
    };
};
