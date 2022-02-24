import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const slideInDown = (
    selector: gsap.TweenTarget,
    from: gsap.TweenVars = {},
    to: gsap.TweenVars = {}
) => {
    const _from = {
        yPercent: -100,
        ...from,
    };
    const _to = {
        yPercent: 0,
        ...to,
    };
    return gsap.fromTo(selector, _from, _to);
};

export const slideInUp = (
    selector: gsap.TweenTarget,
    from: gsap.TweenVars = {},
    to: gsap.TweenVars = {}
) => {
    const _from = {
        yPercent: 100,
        ...from,
    };
    const _to = {
        yPercent: 0,
        ...to,
    };
    return gsap.fromTo(selector, _from, _to);
};

export const slideInLeft = (
    selector: gsap.TweenTarget,
    from: gsap.TweenVars = {},
    to: gsap.TweenVars = {}
) => {
    const _from = {
        xPercent: -100,
        ...from,
    };
    const _to = {
        xPercent: 0,
        ...to,
    };
    return gsap.fromTo(selector, _from, _to);
};

export const slideOutDown = (
    selector: gsap.TweenTarget,
    from: gsap.TweenVars = {},
    to: gsap.TweenVars = {}
) => {
    const _from = {
        yPercent: 0,
        ...from,
    };
    const _to = {
        yPercent: 100,
        ...to,
    };
    return gsap.fromTo(selector, _from, _to);
};

export const slideOutUp = (
    selector: gsap.TweenTarget,
    from: gsap.TweenVars = {},
    to: gsap.TweenVars = {}
) => {
    const _from = {
        yPercent: 0,
        ...from,
    };
    const _to = {
        yPercent: -100,
        ...to,
    };
    return gsap.fromTo(selector, _from, _to);
};

export const fadeIn = (
    selector: gsap.TweenTarget,
    from: gsap.TweenVars = {},
    to: gsap.TweenVars = {}
) => {
    const _from = {
        opacity: 0,
        ...from,
    };
    const _to = {
        opacity: 1,
        ...to,
    };
    return gsap.fromTo(selector, _from, _to);
};

export const fadeOut = (
    selector: gsap.TweenTarget,
    from: gsap.TweenVars = {},
    to: gsap.TweenVars = {}
) => {
    const _from = {
        opacity: 1,
        ...from,
    };
    const _to = {
        opacity: 0,
        ...to,
    };
    return gsap.fromTo(selector, _from, _to);
};

export const slideRight = (selector: gsap.TweenTarget, to: gsap.TweenVars = {}) => {
    const _to = {
        xPercent: 100,
        ...to,
    };
    return gsap.to(selector, _to);
};

export const slideDown = (selector: gsap.TweenTarget, to: gsap.TweenVars = {}) => {
    const _to = {
        yPercent: 100,
        ...to,
    };
    return gsap.to(selector, _to);
};

export const scrollTriggerHeadingTimeline = (selector: string | Element) => {
    return gsap
        .timeline({
            scrollTrigger: {
                trigger: selector,
                start: "top 90%",
                once: true,
            },
        })
        .set(selector, { visibility: "visible" })
        .add(slideInDown(selector, {}, { duration: 0.5, delay: 0.5 }));
};

export const scrollTriggerBatch = (
    target: gsap.DOMTarget,
    batch: (batch: Element[]) => Element[] = (b) => b
) => {
    return ScrollTrigger.batch(target, {
        once: true,
        onEnter: (_batch) =>
            gsap.fromTo(
                batch(_batch),
                {
                    opacity: 0,
                    y: 50,
                    visibility: "visible",
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: { each: 0.25 },
                    ease: "power1.inOut",
                }
            ),
        start: "top-=50px 95%",
    });
};
