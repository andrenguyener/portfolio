export const SmoothScroll = (_target: Element | Document, speed: number, smooth: number) => {
    const scrolled = (e: any) => {
        e.preventDefault(); // disable default scrolling

        const delta = normalizeWheelDelta(e);

        pos += -delta * speed;
        pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)); // limit scrolling

        if (!moving) {
            update();
        }
    };

    const normalizeWheelDelta = (e: any) => {
        if (e.detail) {
            if (e.wheelDelta) return (e.wheelDelta / e.detail / 40) * (e.detail > 0 ? 1 : -1);
            // Opera
            else {
                return -e.detail / 3;
            } // Firefox
        } else {
            return e.wheelDelta / 120;
        } // IE,Safari,Chrome
    };

    const update = () => {
        moving = true;

        const delta = (pos - target.scrollTop) / smooth;

        target.scrollTop += delta;

        if (Math.abs(delta) > 0.5) {
            requestFrame(update);
        } else {
            moving = false;
        }
    };

    const requestFrame = (() => {
        const x = (func: any) => {
            window.setTimeout(func, 1000 / 50);
        };
        // requestAnimationFrame cross browser
        return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            (window as any).mozRequestAnimationFrame ||
            (window as any).oRequestAnimationFrame ||
            (window as any).msRequestAnimationFrame ||
            x
        );
    })();

    const target =
        _target === document
            ? document.scrollingElement ||
              document.documentElement ||
              document.body.parentNode ||
              document.body
            : (_target as Element);

    let moving = false;
    let pos = target.scrollTop;
    const frame =
        target === document.body && document.documentElement ? document.documentElement : target; // safari is the new IE
    target.addEventListener("mousewheel", scrolled, { passive: false });
    target.addEventListener("DOMMouseScroll", scrolled, { passive: false });
};

export default SmoothScroll;
