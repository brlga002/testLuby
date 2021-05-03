import React from "react";
import {
  IoPeopleOutline,
  IoPersonAddOutline,
  IoExitOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";

import { Container, Brand, ContainerNavigation } from "./styles";

function LeftPanel({ show }) {
  return (
    <Container show={show}>
      <ContainerNavigation>
        <ContainerNavigation.Item>
          <Link to="/">
            <IoPeopleOutline size="25" /> Alunos
          </Link>
        </ContainerNavigation.Item>

        <ContainerNavigation.Item>
          <Link to="/cadastrar">
            <IoPersonAddOutline size="25" /> Cadastrar Aluno
          </Link>
        </ContainerNavigation.Item>

        <ContainerNavigation.Item>
          <Link to="/logout">
            <IoExitOutline size="25" /> Sair
          </Link>
        </ContainerNavigation.Item>
      </ContainerNavigation>
    </Container>
  );
}

export default LeftPanel;
