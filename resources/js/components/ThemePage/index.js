import React from "react";

import { Container } from "./styles";
import LeftPanel from "../LeftPanel";
import Main from "../Main";

function ThemePage({ children }) {
    return (
        <Container>
            <LeftPanel />
            <Main>{children}</Main>
        </Container>
    );
}

export default ThemePage;
