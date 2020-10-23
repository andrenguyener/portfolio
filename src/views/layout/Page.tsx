import React from "react";
import styled from "styled-components";

import { Bars, Logo, Scroll } from "./../../components";
import Navigation from "./Navigation";

export const Page: React.FC = ({ children }) => {
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
