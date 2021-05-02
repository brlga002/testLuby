import React from "react";
import { IoTrash, IoCreateOutline, IoCalendarOutline } from "react-icons/io5";
import { FiFilter } from "react-icons/fi";

import { Title, ContainerIcon, Form } from "./styles";
import ThemePage from "../../components/ThemePage";
import { colors } from "../../theme";

function Home() {
  const students = [
    {
      id: 1,
      name: "miguel fernandes",
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
      nMatricula: "456er7",
      serie: 5,
      sexo: "feminino",
      idade: 10,
      cpf: "001.130.832-21",
      telefone: "92 88175-5655",
    },
  ];
  const [searchString, setSearchString] = React.useState("");
  const [filteData, setFilteData] = React.useState(students);

  function filter() {
    const number = searchString.length;
    const newData = students.filter(
      (student) =>
        `${student.id}` === searchString ||
        student.name.substring(0, number).toLowerCase() ===
          searchString.toLowerCase() ||
        student.nMatricula.substring(0, number) === searchString ||
        student.sexo.substring(0, number) === searchString ||
        student.cpf.substring(0, number) === searchString ||
        student.telefone.substring(0, number) === searchString
    );
    setFilteData(newData);
  }

  React.useEffect(() => {
    filter();
  }, [searchString]);

  return (
    <ThemePage>
      <Title>Listagem de alunos</Title>

      <div className="table-responsive">
        <caption>
          <Form>
            <Form.InputGroup>
              <Form.IconContainer>
                <FiFilter size={25} color={colors.grey} />
              </Form.IconContainer>
              <Form.Input
                type="text"
                placeholder=""
                value={searchString}
                onChange={(e) => setSearchString(e.target.value)}
              />
            </Form.InputGroup>
          </Form>
        </caption>
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
            {filteData.map((student) => (
              <tr>
                <th>{student.id}</th>
                <th>{student.name}</th>
                <th>{student.nMatricula}</th>
                <th>{student.serie}</th>
                <th>{student.sexo}</th>
                <th>{student.idade}</th>
                <th>{student.cpf}</th>
                <th>{student.telefone}</th>
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
