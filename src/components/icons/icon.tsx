import {
    IconAdobeAcrobat,
    IconChevronLeftCircle,
    IconChevronRightCircle,
    IconExternal,
    IconFolder,
    IconFrameAccent,
    IconGitHub,
    IconLinkedin,
    IconMail,
    IconSoundcloud,
} from "./";

enum IconName {
    AdobeAcrobat,
    ChevronLeftCircle,
    ChevronRightCircle,
    External,
    Folder,
    FrameAccent,
    GitHub,
    Linkedin,
    Logo,
    Mail,
    Soundcloud,
}

const Icon = ({ name }: { name: keyof typeof IconName }) => {
    switch (name) {
        case "AdobeAcrobat":
            return <IconAdobeAcrobat />;
        case "ChevronLeftCircle":
            return <IconChevronLeftCircle />;
        case "ChevronRightCircle":
            return <IconChevronRightCircle />;
        case "External":
            return <IconExternal />;
        case "Folder":
            return <IconFolder />;
        case "FrameAccent":
            return <IconFrameAccent />;
        case "GitHub":
            return <IconGitHub />;
        case "Linkedin":
            return <IconLinkedin />;
        case "Mail":
            return <IconMail />;
        case "Soundcloud":
            return <IconSoundcloud />;
        default:
            return <IconExternal />;
    }
};

export default Icon;
