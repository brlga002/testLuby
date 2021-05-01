import React from "react";
import { IoMenuOutline } from "react-icons/io5";

import { Container, NavBar, ToggleMenu, Content } from "./styles";

function Main({ children, toggleMenu }) {
  return (
    <Container>
      <NavBar>
        <ToggleMenu
          onClick={() => {
            toggleMenu();
          }}
        >
          <IoMenuOutline color="#fff" size="30" />
        </ToggleMenu>
        <NavBar.Text>LUBY software do seu jeito</NavBar.Text>
      </NavBar>
      <Content>{children}</Content>
    </Container>
  );
}

export default Main;
