import React from "react";
import { IoTrash, IoCreateOutline, IoCalendarOutline } from "react-icons/io5";
import { FiFilter } from "react-icons/fi";
import { useHistory } from "react-router-dom";

import {
  Title,
  ContainerIcon,
  Form,
  ButtonStyle,
  ContainerFilter,
} from "./styles";
import ThemePage from "../../components/ThemePage";
import { colors } from "../../theme";
import api from "../../services/api";
import Alert from "../../components/Alert";
import Modal from "../../components/Modal";

function Home({ location }) {
  const history = useHistory();
  const [mensage, setMensage] = React.useState({});
  const [showModal, setShowModal] = React.useState(false);
  const [searchString, setSearchString] = React.useState("");
  const [students, setStudents] = React.useState([]);
  const [filteData, setFilteData] = React.useState([]);
  const [studentNote, setStudentNote] = React.useState({
    id: "",
    name: "",
    nota: "",
    resultado: "",
  });

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

  const handleSaveNote = async () => {
    try {
      const response = await api.post(`/students/${studentNote.id}/notes`, {
        nota: studentNote.nota,
      });
      const { data } = response;
      const { message } = data;
      setMensage({ type: "success", text: message });
      loadStudents();
      setShowModal(false);
    } catch (error) {
      const message = error.response.message || "Erro ao salvar nota";
      setMensage({ type: "danger", text: message });
      setShowModal(false);
    }
  };

  React.useEffect(() => {
    const { state } = location;
    if (state) {
      setMensage({ text: state.message, type: "success" });
    }
  }, [location]);

  React.useEffect(() => {
    loadStudents();
  }, []);

  React.useEffect(() => {
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

    filter();
  }, [searchString]);

  React.useEffect(() => {
    const { nota } = studentNote;
    if (!nota) return;

    if (nota > 10) {
      setStudentNote({ ...studentNote, nota: 10 });
      setMensage({ type: "danger", text: "nota maxima 10" });
      return;
    }

    if (nota > 5)
      return setStudentNote({ ...studentNote, resultado: "aprovado" });
    if (nota < 5)
      return setStudentNote({ ...studentNote, resultado: "reprovado" });
  }, [studentNote.nota]);

  return (
    <ThemePage>
      <Title>Listagem de alunos</Title>
      <Alert mensage={mensage} setMensage={setMensage} />
      <Modal title="Atribuir nota" show={showModal} setShow={setShowModal}>
        <Form>
          <Form.InputGroup>
            <Form.Label>Nome</Form.Label>

            <Form.Input
              type="text"
              placeholder=""
              value={studentNote.name}
              onChange={() => {}}
            />
          </Form.InputGroup>

          <Form.InputGroup>
            <Form.Label>Nota</Form.Label>

            <Form.Input
              type="number"
              min="0"
              max="10"
              placeholder=""
              value={studentNote.nota}
              onChange={(e) =>
                setStudentNote({ ...studentNote, nota: e.target.value })
              }
            />
          </Form.InputGroup>

          <Form.Title>Resultado: {studentNote.resultado}</Form.Title>
        </Form>
        <ButtonStyle
          onClick={() => {
            handleSaveNote();
          }}
        >
          Salvar
        </ButtonStyle>
      </Modal>

      <div className="table-responsive">
        <ContainerFilter>
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
        </ContainerFilter>

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
                <tr key={`students-${student.id}`}>
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
                      <IoCalendarOutline
                        size={25}
                        color={colors.primary}
                        onClick={() => {
                          const dataModal = {
                            id: student.id,
                            name: student.name,
                            nota: nota || "",
                            resultado: resultado || "nota pendente",
                          };
                          setStudentNote(dataModal);
                          setShowModal(true);
                        }}
                      />
                      <IoCreateOutline
                        size={25}
                        color={colors.primary}
                        onClick={() => {
                          history.push(`/editar/${student.id}`);
                        }}
                      />
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
