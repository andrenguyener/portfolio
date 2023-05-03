import React from "react";

import { gsap } from "gsap";

import { tweens } from "./../../themes/styles/abstracts";

export const animationsRefs = () => {
    const elRefs = {
        leftSlider: React.createRef<HTMLButtonElement>(),
        rightSlider: React.createRef<HTMLButtonElement>(),
        playground: React.createRef<HTMLDivElement>(),
    } as const;

    const galleryGoOut = () => {
        const { leftSlider, rightSlider, playground } = elRefs;
        const label = "Gallery";
        const timeline = gsap.timeline();
        return (
            timeline
                // Note the playground has a bit different starting / ending opacities
                .add(
                    tweens.fadeOut(playground.current, {}, { duration: 0.75, opacity: 0.4 }),
                    label
                )
                .add(tweens.fadeOut(leftSlider.current, {}, { duration: 0.75 }), label)
                .add(tweens.fadeOut(rightSlider.current, {}, { duration: 0.75 }), label)
        );
    };

    const galleryComeIn = () => {
        const { leftSlider, rightSlider, playground } = elRefs;
        const label = "Gallery";
        const timeline = gsap.timeline();
        return timeline
            .add(
                tweens.fadeIn(playground.current, { opacity: 0.4 }, { duration: 0.75, delay: 0.1 }),
                label
            )
            .add(tweens.fadeIn(leftSlider.current, {}, { duration: 0.75, delay: 0.1 }), label)
            .add(tweens.fadeIn(rightSlider.current, {}, { duration: 0.75, delay: 0.1 }), label);
    };

    return {
        elRefs,
        galleryComeIn,
        galleryGoOut,
    };
};
