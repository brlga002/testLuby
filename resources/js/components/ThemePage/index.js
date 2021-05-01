import React from "react";

import { Container } from "./styles";
import LeftPanel from "../LeftPanel";
import Main from "../Main";

function ThemePage({ children }) {
  const [show, setShow] = React.useState(true);
  const toggleMenu = () => {
    setShow(!show);
  };

  return (
    <Container>
      <LeftPanel show={show} />
      <Main toggleMenu={toggleMenu}>{children}</Main>
    </Container>
  );
}

export default ThemePage;
