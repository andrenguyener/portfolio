import { keyframes } from "styled-components";

export const growIn = keyframes`
    0% {
		width: 100%;
	}

	50% {
		width: 0%;
		background-color: transparent;
	}

	100% {
		width: 100%;
	}
`;

export const grow = keyframes`
	0% {
		width: 0%;
	}

	100% {
		width: 100%;
	}
`;

export const slideInLeft = keyframes`
    from {
		transform: translate3d(-100%, 0, 0);
		visibility: visible;
	}

	to {
		transform: translate3d(0, 0, 0);
	}
`;

export const slideInDown = keyframes`
    from {
        transform: translate3d(0, -100%, 0);
        visibility: visible;
    }

    to {
        transform: translate3d(0, 0, 0);
    }
`;

export const slideInUp = keyframes`
	from {
		transform: translate3d(0, 100%, 0);
		visibility: visible;
	}

	to {
		transform: translate3d(0, 0, 0);
	}
`;

export const slideOutRight = keyframes`
    from {
        transform: translate3d(0, 0, 0);
    }

    to {
        visibility: hidden;
        transform: translate3d(100%, 0, 0);
    }
`;

export const slideOutDown = keyframes`
	from {
		transform: translate3d(0, 0, 0);
	}

	to {
		visibility: hidden;
		transform: translate3d(0, 100%, 0);
	}
`;

export const slideOutLeft = keyframes`
	from {
		transform: translate3d(0, 0, 0);
	}

	to {
		visibility: hidden;
		transform: translate3d(-100%, 0, 0);
	}
`;

export const slideOutUp = keyframes`
	from {
		transform: translate3d(0, 0, 0);
	}

	to {
		visibility: hidden;
		transform: translate3d(0, -100%, 0);
	}
`;

export const fadeInHeader = keyframes`
	from {
		opacity: 0;
	}

	to {
		opacity: 0.1;
	}
`;

export const fadeIn = keyframes`
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
`;

export const spinner = (size: number) => {
    const done = 0;
    const less = 0.66 * size;
    const none = 3.14 * size;
    return keyframes`
		0% {
			transform: rotate(0);
			stroke-dashoffset: ${none};
		} 50% {
			transform: rotate(120deg);
			stroke-dashoffset: ${less};
		} 100% {
			transform: rotate(270deg);
			stroke-dashoffset: ${done};
		}
	`;
};
