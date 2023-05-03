import React from "react";

import { gsap } from "gsap";

import { tweens } from "./../../themes/styles/abstracts";

export const animationsRefs = () => {
    const elRefs = {
        title: {
            firstName: React.createRef<HTMLHeadingElement>(),
            lastName: React.createRef<HTMLHeadingElement>(),
            metaFirstName: React.createRef<HTMLHeadingElement>(),
            sub: React.createRef<HTMLHeadingElement>(),
        },
        horizontalBar: React.createRef<HTMLSpanElement>(),
        dateTime: React.createRef<HTMLParagraphElement>(),
    } as const;

    const titleSlideAway = () => {
        const { firstName, lastName, metaFirstName, sub } = elRefs.title;
        const label = "Title";
        const timeline = gsap.timeline();
        return timeline
            .add(tweens.slideOutUp(firstName.current, {}, { duration: 0.5 }), label)
            .add(tweens.slideOutRight(lastName.current, {}, { duration: 0.75 }), label)
            .add(tweens.slideOutUp(metaFirstName.current, {}, { duration: 0.75 }), label)
            .add(tweens.slideOutDown(sub.current, {}, { duration: 0.5 }), label);
    };

    const titleSlideIn = () => {
        const { firstName, lastName, metaFirstName, sub } = elRefs.title;
        const label = "Title";
        const timeline = gsap.timeline();
        return timeline
            .add(tweens.slideInDown(firstName.current, {}, { duration: 0.75 }), label)
            .add(tweens.slideInLeft(lastName.current, {}, { duration: 0.9, delay: 0.1 }), label)
            .add(
                tweens.slideInDown(metaFirstName.current, {}, { duration: 0.75 }),
                `${label}+=0.25`
            )
            .add(tweens.slideInUp(sub.current, {}, { duration: 0.75 }), label);
    };

    const dateTimeSlideIn = (isolateDateTime = false) => {
        const { horizontalBar, dateTime } = elRefs;
        const label = "Date Time";
        const timeline = gsap.timeline();
        if (isolateDateTime) {
            return timeline.add(
                tweens.slideInDown(dateTime.current, {}, { duration: 0.5 }),
                label + "+=0.5"
            );
        } else {
            return timeline
                .add(tweens.slideInLeft(horizontalBar.current, {}, { duration: 0.5 }), label)
                .add(tweens.slideInDown(dateTime.current, {}, { duration: 0.5 }), label + "+=0.5");
        }
    };

    const dateTimeSlideAway = () => {
        const { dateTime } = elRefs;
        const label = "Date Time";
        const timeline = gsap.timeline();
        return timeline.add(tweens.slideOutUp(dateTime.current, {}, { duration: 0.5 }), label);
    };

    // const backgroundFadeIn = () => {
    //     const { background } = elRefs;
    //     const label = "header_background";
    //     const timeline = gsap.timeline();
    //     timeline.set(background.current, { visibility: "visible" });
    //     return timeline.add(
    //         tweens.fadeIn(background.current, {}, { opacity: 0.15, duration: 1 }),
    //         label
    //     );
    // };

    return {
        elRefs,
        // backgroundFadeIn,
        titleSlideAway,
        titleSlideIn,
        dateTimeSlideIn,
        dateTimeSlideAway,
    };
};
