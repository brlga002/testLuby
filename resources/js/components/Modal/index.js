import React from "react";
import { Container, Close, Main, Title } from "./styles";

function Modal({
  title = "title",
  show = false,
  setShow = () => {},
  close = () => {
    setShow(false);
  },
  children,
}) {
  return (
    <Container show={show}>
      <Main>
        <Title>
          {title}
          <Close onClick={close}>&times;</Close>
        </Title>
        <Main.Content>{children}</Main.Content>
      </Main>
    </Container>
  );
}

export default Modal;
