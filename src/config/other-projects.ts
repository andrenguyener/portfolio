export interface OtherProject {
    title: string;
    description: string;
    github?: string;
    external?: string;
    tech: string[];
}

export const OTHER_PROJECTS_DATA: OtherProject[] = [
    {
        title: "Space Invaders",
        description: "Remake of the space invaders game using ES6 syntax",
        github: "https://github.com/andrenguyener/space-invaders",
        external: "https://spaceinvaders.andrenguyen.dev/",
        tech: ["React", "Firebase"],
    },
    {
        title: "CSS Study",
        description:
            "Articles describing how CSS works behind the scenes: the cascade, specificity, inheritance, etc.",
        github: "https://github.com/andrenguyener/css-study",
        external: "https://css-study.andrenguyen.dev/",
        tech: ["Vue"],
    },
    {
        title: "Memoir One Theme",
        description: "A minimal dark theme for VS Code inspired by the One Dark Pro theme",
        github: "https://github.com/andrenguyener/Memoir-One",
        external: "https://marketplace.visualstudio.com/items?itemName=andrenguyener.Memoir-One",
        tech: ["VS Code"],
    },
    {
        title: "Husky Break",
        description:
            "Husky Break is a student organization at the University of Washington. Developed their site to inform the public about them, showcase their members, and recruit more members.",
        github: "https://github.com/andrenguyener/husky-break",
        external: "https://huskybreakclub.andrenguyen.dev/",
        tech: ["HTML", "CSS", "JavaScript"],
    },
    {
        title: "Epic Pet Health",
        description:
            "Epic Pet Health is a Seattle based company that team members and I reached out to remodel their website. We redesigned their layout of information to help customers find products catered to their preferences.",
        github: "https://github.com/andrenguyener/epic-pet-health",
        tech: ["React"],
    },
    {
        title: "Lac Hong",
        description:
            "Lac Hong is a Vietnamese non-profit organization that I developed the front end for. Migrated over their previous files and document to work with a new system. Redesigned their pages and layout to communicate the information more effectively.",
        github: "https://github.com/andrenguyener/lac-hong",
        tech: ["React"],
    },
];
