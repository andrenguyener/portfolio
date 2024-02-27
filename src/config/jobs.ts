interface JobData {
    title: string;
    url: string;
    company: string;
    range: string;
    notes: string[];
}

export const JOBS_DATA: JobData[] = [
    {
        title: "Frontend – Full Stack Software Engineer",
        url: "https://healsecurity.com/",
        company: "HEAL Security",
        range: "May 2023 – Current",
        notes: [
            "Constructing user-centric UI features for an AI-driven healthcare cybersecurity platform",
            "Developing and owning microservices within a backend-for-frontend architecture, notably the users/workspace service",
        ],
    },
    {
        title: "Frontend Software Engineer",
        url: "https://www.nginx.com/",
        company: "NGINX",
        range: "May 2019 – May 2023",
        notes: [
            "Contributed to NGINX UI development, focusing on modules for API Management, Developer Portal, and Security",
            "Crafted diverse UI elements—data visualizations, editors, dynamic themes —enhancing micro frontend app functionality",
            "Spearheaded the creation and deployment of the primary form library utilized across the product team",
            "Collaborated with designers to craft UI components for the framework agnostic design library",
        ],
    },
    {
        title: "Software Engineer Intern",
        url: "https://genemod.net/",
        company: "Genemod",
        range: "Jan – April 2019",
        notes: [
            "Developed a tailored library for the web application dashboard, mirroring the interface of a biomedical lab freezer",
            "Converted, redesigned, and optimized features that were written in jQuery to React components",
            "Collaborated with the UX designer and the tech lead to architect, mockup, and code out wireframe designs",
        ],
    },
    {
        title: "Software Engineer Intern",
        url: "https://www.f5.com/",
        company: "F5 Networks",
        range: "June – Sept 2018",
        notes: [
            "Implemented webhooks for automated UI merge request deployment, enhancing member review efficiency",
            "Integrated unit and integration tests into the web application and UI design system library pipelines",
        ],
    },
];
