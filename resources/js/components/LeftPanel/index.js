import React from "react";

import { Container, Brand, ContainerNavigation } from "./styles";

function LeftPanel() {
    return (
        <Container>
            <Brand>
                <Brand.Title>Modulo Acadêmico</Brand.Title>
                <Brand.SubTitle>Luby</Brand.SubTitle>
            </Brand>
            <ContainerNavigation>
                <ContainerNavigation.Item>Alunos</ContainerNavigation.Item>
                <ContainerNavigation.Item>
                    Cadastrar Aluno
                </ContainerNavigation.Item>
            </ContainerNavigation>
        </Container>
    );
}

export default LeftPanel;
