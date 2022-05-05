import { gsap } from "gsap/dist/gsap";
import React from "react";

import { tweens } from "./../themes/styles/abstracts";

export const animationsRefs = () => {
    const elRefs = {
        arrow: React.createRef<SVGSVGElement>(),
        circle: React.createRef<SVGCircleElement>(),
    } as const;

    const scrollArrowEntry = (spinnerSize: number) => {
        const { arrow, circle } = elRefs;
        const label = "Scroll Arrow";
        const timeline = gsap.timeline();
        return timeline
            .set([arrow.current, circle.current], { visibility: "visible" })
            .set([circle.current, arrow.current], { opacity: 0 })
            .add(
                tweens.slideInDown(arrow.current, { opacity: 0 }, { duration: 1, opacity: 1 }),
                label
            )
            .to(arrow.current, 1.5, {
                ease: "sine",
                repeat: -1,
                keyframes: [
                    {
                        translateY: "0",
                    },
                    {
                        translateY: "4px",
                    },
                    {
                        translateY: "0",
                    },
                ],
            })
            .to(
                circle.current,
                2,
                {
                    ease: "power2.out",
                    keyframes: [
                        {
                            visibility: "visible",
                            rotate: "-90deg",
                            strokeDashoffset: 3.14 * spinnerSize,
                            opacity: 0,
                        },
                        {
                            rotate: "0deg",
                            strokeDashoffset: 3.14 * spinnerSize,
                            opacity: 1,
                        },
                        {
                            rotate: "270deg",
                            strokeDashoffset: 0,
                        },
                    ],
                },
                "-=2"
            );
    };

    const scrollArrowAway = (_spinnerSize: number) => {
        const { arrow } = elRefs;
        const label = "Scroll Arrow";
        const timeline = gsap.timeline();
        return timeline
            .add(tweens.slideOutDown(arrow.current, {}, { duration: 1 }), label)
            .add(tweens.fadeOut(arrow.current, {}, { duration: 1 }), label);
    };

    const arrowIn = (_spinnerSize: number) => {
        const { arrow } = elRefs;
        const label = "Scroll Arrow";
        const timeline = gsap.timeline();
        return timeline
            .set(arrow.current, { yPercent: -500 })
            .add(tweens.slideInDown(arrow.current, {}, { duration: 1 }), label)
            .add(tweens.fadeIn(arrow.current, {}, { duration: 1 }), label);
    };

    return { elRefs, scrollArrowAway, scrollArrowEntry, arrowIn };
};
