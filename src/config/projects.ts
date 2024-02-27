export interface Desktop {
    desktop: {
        url: string;
    };
}

export interface Mobile {
    mobile: {
        url1: string;
        url2: string;
    };
}

export interface Project {
    title: string;
    description: string;
    image: Desktop | Mobile;
    video?: Desktop;
    techList: string[];
    github?: string;
    external?: string;
}

export const PROJECTS_DATA: Project[] = [
    {
        title: "Voxel Blox",
        description: "3D voxel models rendered with three.js",
        techList: [
            "Typescript",
            "Next.js",
            "React Three Fiber",
            "Chakra UI",
            "MagicaVoxel",
            "Blender",
            "Framer Motion",
        ],
        image: {
            desktop: {
                url: "/projects/voxel-blox/desktop1.png",
            },
        },
        video: {
            desktop: {
                url: "/projects/voxel-blox/voxel-blox-vid.mp4",
            },
        },
        external: "https://voxel.andrenguyen.dev",
        github: "https://github.com/andrenguyener/voxel-blox",
    },
    {
        title: "Spotty",
        description:
            "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, detailed audio information about each track, and an audio visualizer",
        techList: ["Typescript", "Next.js", "Spotify Web API", "Howler.js"],
        image: {
            desktop: {
                url: "/projects/spotty/desktop1.png",
            },
        },
        video: {
            desktop: {
                url: "/projects/spotty/spotty-vid.mp4",
            },
        },
        external: "https://spotty.andrenguyen.dev",
        github: "https://github.com/andrenguyener/spotty",
    },
    {
        title: "Mito",
        description:
            "Mito is a social platform that lets users purchase products available on major online e-commerce shops, such as Amazon, to send to one another without exchanging physical addresses.",
        techList: ["Swift", "Go", "Node", "SQL"],
        image: {
            mobile: {
                url1: "/projects/mito/login.png",
                url2: "/projects/mito/home.png",
            },
        },
        github: "https://github.com/andrenguyener/mito",
    },
    {
        title: "Drippy Chat",
        description:
            "Drippy is an instant messaging application similar to slack. Allows users to signup/signin, create channels, and post messages in real time. Features user login with HTTPS authentication, CORS middleware, local caching, and sessions / credentials encryption.",
        techList: ["React", "Node", "Go", "MongoDB", "Websocket", "RabbitMQ", "Redis"],
        image: {
            desktop: {
                url: "/projects/drippy/desktop.png",
            },
        },
        github: "https://github.com/andrenguyener/drippy-chat",
    },
];
