import React from "react";
import { useHistory, useParams } from "react-router-dom";

import { Title, CardForm, Form, FormContainer, ButtonStyle } from "./styles";
import ThemePage from "../../components/ThemePage";
import { colors } from "../../theme";
import api from "../../services/api";
import buscaCep from "../../services/buscaCep";
import Alert from "../../components/Alert";
import { FiSearch } from "react-icons/fi";

function EditStudent() {
  const { id } = useParams();
  const history = useHistory();
  const [mensage, setMensage] = React.useState({});
  const [dataSend, setDataSend] = React.useState({
    name: "",
    nMatricula: "",
    serie: "",
    idade: "",
    cpf: "",
    sexo: "",
    telefone: "",
    cep: "",
    logradouro: "",
    complemento: "",
    numero: "",
    bairro: "",
    localidade: "",
    uf: "",
  });

  const loadStudent = async () => {
    try {
      const response = await api.get(`/students/${id}`);
      const { data } = response;
      const { student } = data;
      setDataSend({ ...student });
    } catch (error) {
      history.push("/", {
        message: "Erro ao carregar",
      });
    }
  };

  const handleSalveStudent = async (e) => {
    e.preventDefault();
    try {
      const response = await api.put(`/students/${id}`, dataSend);
      const { data } = response;
      history.push("/", data);
    } catch (error) {
      const msg = error.response.message || "Erro ao salvar";
      setMensage({ type: "danger", text: msg });
    }
  };

  const handleSearchCep = async () => {
    try {
      const response = await buscaCep(dataSend.cep);

      console.log(response);
      console.log(response.bairro);
      setDataSend({ ...dataSend, ...response });
    } catch (error) {
      setMensage({ type: "danger", text: "Cep não encontrado" });
    }
  };

  React.useEffect(() => {
    loadStudent();
  }, []);

  return (
    <ThemePage>
      <Title>Editar cadastro</Title>
      <Alert mensage={mensage} setMensage={setMensage} />
      <Form onSubmit={handleSalveStudent}>
        <CardForm>
          <FormContainer>
            <FormContainer.InputGroup>
              <FormContainer.Label>Nome</FormContainer.Label>
              <FormContainer.Input
                type="text"
                placeholder=""
                required
                value={dataSend.name}
                onChange={(e) =>
                  setDataSend({ ...dataSend, name: e.target.value })
                }
              />
            </FormContainer.InputGroup>

            <FormContainer.InputGroup>
              <FormContainer.Label>N° matrícula</FormContainer.Label>
              <FormContainer.Input
                type="text"
                placeholder=""
                required
                value={dataSend.nMatricula}
                onChange={(e) =>
                  setDataSend({ ...dataSend, nMatricula: e.target.value })
                }
              />
            </FormContainer.InputGroup>
          </FormContainer>

          <FormContainer>
            <FormContainer.InputGroup>
              <FormContainer.Label>Série</FormContainer.Label>
              <FormContainer.Input
                type="text"
                placeholder=""
                required
                value={dataSend.serie}
                onChange={(e) =>
                  setDataSend({ ...dataSend, serie: e.target.value })
                }
              />
            </FormContainer.InputGroup>

            <FormContainer.InputGroup>
              <FormContainer.Label>Idade</FormContainer.Label>
              <FormContainer.Input
                type="text"
                placeholder=""
                required
                value={dataSend.idade}
                onChange={(e) =>
                  setDataSend({ ...dataSend, idade: e.target.value })
                }
              />
            </FormContainer.InputGroup>
          </FormContainer>

          <FormContainer>
            <FormContainer.InputGroup>
              <FormContainer.Label>CPF</FormContainer.Label>
              <FormContainer.Input
                type="text"
                placeholder=""
                required
                value={dataSend.cpf}
                onChange={(e) =>
                  setDataSend({ ...dataSend, cpf: e.target.value })
                }
              />
            </FormContainer.InputGroup>

            <FormContainer.InputGroup>
              <FormContainer.Label>Sexo</FormContainer.Label>
              <FormContainer.Input
                type="text"
                placeholder=""
                required
                value={dataSend.sexo}
                onChange={(e) =>
                  setDataSend({ ...dataSend, sexo: e.target.value })
                }
              />
            </FormContainer.InputGroup>

            <FormContainer.InputGroup>
              <FormContainer.Label>Telefone</FormContainer.Label>
              <FormContainer.Input
                type="text"
                placeholder=""
                required
                value={dataSend.telefone}
                onChange={(e) =>
                  setDataSend({ ...dataSend, telefone: e.target.value })
                }
              />
            </FormContainer.InputGroup>
          </FormContainer>
        </CardForm>

        <CardForm>
          <FormContainer>
            <FormContainer.InputGroup>
              <FormContainer.Label>CEP</FormContainer.Label>
              <FormContainer.Input
                type="text"
                placeholder=""
                required
                value={dataSend.cep}
                onChange={(e) =>
                  setDataSend({ ...dataSend, cep: e.target.value })
                }
              />
              <FormContainer.IconContainer
                onClick={() => {
                  handleSearchCep();
                }}
              >
                <FiSearch size={25} color={colors.secondary} />
              </FormContainer.IconContainer>
            </FormContainer.InputGroup>
            <FormContainer.InputGroup>
              <FormContainer.Label>Logradouro</FormContainer.Label>
              <FormContainer.Input
                type="text"
                placeholder=""
                required
                value={dataSend.logradouro}
                onChange={(e) =>
                  setDataSend({ ...dataSend, logradouro: e.target.value })
                }
              />
            </FormContainer.InputGroup>

            <FormContainer.InputGroup>
              <FormContainer.Label>Complemento</FormContainer.Label>
              <FormContainer.Input
                type="text"
                placeholder=""
                value={dataSend.complemento}
                onChange={(e) =>
                  setDataSend({ ...dataSend, complemento: e.target.value })
                }
              />
            </FormContainer.InputGroup>
          </FormContainer>

          <FormContainer>
            <FormContainer.InputGroup>
              <FormContainer.Label>Numero</FormContainer.Label>
              <FormContainer.Input
                type="text"
                placeholder=""
                required
                value={dataSend.numero}
                onChange={(e) =>
                  setDataSend({ ...dataSend, numero: e.target.value })
                }
              />
            </FormContainer.InputGroup>

            <FormContainer.InputGroup>
              <FormContainer.Label>Bairro</FormContainer.Label>
              <FormContainer.Input
                type="text"
                placeholder=""
                required
                value={dataSend.bairro}
                onChange={(e) =>
                  setDataSend({ ...dataSend, bairro: e.target.value })
                }
              />
            </FormContainer.InputGroup>
          </FormContainer>

          <FormContainer>
            <FormContainer.InputGroup>
              <FormContainer.Label>Cidade</FormContainer.Label>
              <FormContainer.Input
                type="text"
                placeholder=""
                required
                value={dataSend.localidade}
                onChange={(e) =>
                  setDataSend({ ...dataSend, localidade: e.target.value })
                }
              />
            </FormContainer.InputGroup>

            <FormContainer.InputGroup>
              <FormContainer.Label>UF</FormContainer.Label>
              <FormContainer.Input
                type="text"
                placeholder=""
                maxlength="2"
                required
                value={dataSend.uf}
                onChange={(e) =>
                  setDataSend({ ...dataSend, uf: e.target.value })
                }
              />
            </FormContainer.InputGroup>
          </FormContainer>
          <ButtonStyle type="submit">Salvar</ButtonStyle>
        </CardForm>
      </Form>
    </ThemePage>
  );
}

export default EditStudent;
