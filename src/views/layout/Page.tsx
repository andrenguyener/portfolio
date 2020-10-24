import React from "react";
import styled from "styled-components";

import { Bars, Logo, Scroll } from "./../../components";
import Navigation from "./Navigation";

import SmoothScroll from "./../../utils/SmoothScroll";

export const Page: React.FC = ({ children }) => {
    React.useEffect(() => {
        if (!(window as any)?.smoothScroll) {
            (window as any).smoothScroll = SmoothScroll(document, 120, 12);
        }
    }, []);
    return (
        <PageContainer>
            <Logo />
            <Navigation />
            <Scroll />
            {children}
            <Bars type="vertical" />
        </PageContainer>
    );
};

const PageContainer = styled.div`
    position: relative;
`;

export default Page;
