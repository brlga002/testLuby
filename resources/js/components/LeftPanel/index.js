import React from "react";
import { IoPeopleOutline, IoPersonAddOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

import { Container, Brand, ContainerNavigation } from "./styles";

function LeftPanel({ show }) {
  return (
    <Container show={show}>
      <Brand>
        <Brand.Title>Modulo Acadêmico</Brand.Title>
        <Brand.SubTitle>Luby</Brand.SubTitle>
      </Brand>
      <ContainerNavigation>
        <ContainerNavigation.Item>
          <Link to="/login">
            <IoPeopleOutline size="25" /> Alunos
          </Link>
        </ContainerNavigation.Item>

        <ContainerNavigation.Item>
          <Link to="/login">
            <IoPersonAddOutline size="25" /> Cadastrar Aluno
          </Link>
        </ContainerNavigation.Item>
      </ContainerNavigation>
    </Container>
  );
}

export default LeftPanel;
