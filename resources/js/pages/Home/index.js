import React from "react";
import { IoTrash, IoCreateOutline, IoCalendarOutline } from "react-icons/io5";
import { FiFilter } from "react-icons/fi";

import { Title, ContainerIcon, Form } from "./styles";
import ThemePage from "../../components/ThemePage";
import { colors } from "../../theme";
import api from "../../services/api";
import Alert from "../../components/Alert";

function Home() {
  const [mensage, setMensage] = React.useState({});
  const [searchString, setSearchString] = React.useState("");
  const [students, setStudents] = React.useState([]);
  const [filteData, setFilteData] = React.useState([]);

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

  const loadStudents = async () => {
    try {
      const response = await api.get(`/students`);
      const { data } = response;
      setStudents(data.students);
      setFilteData(data.students);
    } catch (error) {
      console.log("erros");
    }
  };

  const deleteStudent = async (id) => {
    try {
      const response = await api.delete(`/students/${id}`);
      const { data } = response;
      const { message } = data;
      setMensage({ type: "success", text: message });
      loadStudents();
    } catch (error) {
      const message = error.response.message || "Erro ao deletar";
      setMensage({ type: "danger", text: message });
    }
  };

  React.useEffect(() => {
    loadStudents();
  }, []);

  React.useEffect(() => {
    filter();
  }, [searchString]);

  return (
    <ThemePage>
      <Title>Listagem de alunos</Title>
      <Alert mensage={mensage} setMensage={setMensage} />
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
              <th>Nota</th>
              <th>Resultado</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteData.map((student) => {
              const { nota, resultado } = student.note || "";

              return (
                <tr>
                  <th>{student.id}</th>
                  <th>{student.name}</th>
                  <th>{student.nMatricula}</th>
                  <th>{student.serie}</th>
                  <th>{student.sexo}</th>
                  <th>{student.idade}</th>
                  <th>{student.cpf}</th>
                  <th>{student.telefone}</th>
                  <th>{nota}</th>
                  <th>{resultado}</th>
                  <th>
                    <ContainerIcon>
                      <IoCalendarOutline size={25} color={colors.primary} />
                      <IoCreateOutline size={25} color={colors.primary} />
                      <IoTrash
                        size={25}
                        color={colors.danger}
                        onClick={() => {
                          deleteStudent(student.id);
                        }}
                      />
                    </ContainerIcon>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </ThemePage>
  );
}

export default Home;
