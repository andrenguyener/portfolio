import React from "react";

import { IconAdobeAcrobat, IconExternal, IconFolder, IconGitHub, IconLinkedin, IconMail } from "./";

enum IconName {
    AdobeAcrobat,
    External,
    Folder,
    GitHub,
    Linkedin,
    Logo,
    Mail,
}

const Icon = ({ name }: { name: keyof typeof IconName }) => {
    switch (name) {
        case "AdobeAcrobat":
            return <IconAdobeAcrobat />;
        case "External":
            return <IconExternal />;
        case "Folder":
            return <IconFolder />;
        case "GitHub":
            return <IconGitHub />;
        case "Linkedin":
            return <IconLinkedin />;
        case "Mail":
            return <IconMail />;
        default:
            return <IconExternal />;
    }
};

export default Icon;
