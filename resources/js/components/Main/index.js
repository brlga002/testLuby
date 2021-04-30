import React from "react";
import { IoMenuOutline } from "react-icons/io5";

import { Container, NavBar, ToggleMenu } from "./styles";

function Main({ children }) {
    return (
        <Container>
            <NavBar>
                <ToggleMenu>
                    <IoMenuOutline color="#222" size="30" />
                </ToggleMenu>
                <NavBar.Text>LUBY software do seu jeito</NavBar.Text>
            </NavBar>
            {children}
        </Container>
    );
}

export default Main;
