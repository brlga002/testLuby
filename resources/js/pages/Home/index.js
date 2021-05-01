import React from "react";
import { IoTrash, IoCreateOutline, IoCalendarOutline } from "react-icons/io5";

import { Title, ContainerIcon } from "./styles";
import ThemePage from "../../components/ThemePage";
import { colors } from "../../theme";

function Home() {
  const alunos = [
    {
      id: 1,
      name: "gabriel fernandes",
      nMatricula: "1235fg",
      serie: 4,
      sexo: "masculino",
      idade: 5,
      cpf: "002.130.832-21",
      telefone: "92 99175-5655",
    },
    {
      id: 2,
      name: "gabriel fernandes",
      nMatricula: "1235fg",
      serie: 4,
      sexo: "masculino",
      idade: 5,
      cpf: "002.130.832-21",
      telefone: "92 99175-5655",
    },
  ];
  return (
    <ThemePage>
      <Title>Home</Title>

      <div className="table-responsive">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>N° matrícula</th>
              <th>Série</th>
              <th>Sexo</th>
              <th>Idade</th>
              <th>CPF</th>
              <th>Telefone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {alunos.map((aluno) => (
              <tr>
                <th>{aluno.id}</th>
                <th>{aluno.name}</th>
                <th>{aluno.nMatricula}</th>
                <th>{aluno.serie}</th>
                <th>{aluno.sexo}</th>
                <th>{aluno.idade}</th>
                <th>{aluno.cpf}</th>
                <th>{aluno.telefone}</th>
                <th>
                  <ContainerIcon>
                    <IoCalendarOutline size={25} color={colors.primary} />
                    <IoCreateOutline size={25} color={colors.primary} />
                    <IoTrash size={25} color={colors.danger} />
                  </ContainerIcon>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ThemePage>
  );
}

export default Home;
