import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Creators as actionAuth } from "../../store/ducks/auth";

import {
  Container,
  ContainerAlert,
  Title,
  ContainerForm,
  CardForm,
  Form,
  FormContainer,
  ButtonStyle,
  ImageBackground,
  ContainerImage,
} from "./styles";
import api from "../../services/api";
import Alert from "../../components/Alert";

function login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [mensage, setMensage] = React.useState({});
  const [email, setEmail] = React.useState("gabriel@luby.com.br");
  const [password, setPassword] = React.useState("123");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post(`/login`, { email, password });
      const { data, status } = response;
      const { accessToken } = data;

      if (status === 200) {
        localStorage.setItem("token", accessToken);
        dispatch(actionAuth.setAuth({ autenticate: true }));
        history.push("/");
      }
    } catch (error) {
      const message = error.response.data.message || "Erro ao logar";
      setMensage({ type: "danger", text: message });
    }
  };

  return (
    <Container>
      <ContainerAlert>
        <Alert mensage={mensage} setMensage={setMensage} />
      </ContainerAlert>
      <ContainerForm>
        <ContainerImage>
          <ImageBackground />
        </ContainerImage>
        <Form onSubmit={handleLogin}>
          <Title>Login</Title>
          <CardForm>
            <FormContainer>
              <FormContainer.InputGroup>
                <FormContainer.Label>E-mail*</FormContainer.Label>
                <FormContainer.Input
                  type="text"
                  placeholder=""
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormContainer.InputGroup>
            </FormContainer>

            <FormContainer>
              <FormContainer.InputGroup>
                <FormContainer.Label>Senha*</FormContainer.Label>
                <FormContainer.Input
                  type="password"
                  placeholder=""
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormContainer.InputGroup>
            </FormContainer>

            <ButtonStyle type="submit">Fazer login</ButtonStyle>
          </CardForm>
        </Form>
      </ContainerForm>
    </Container>
  );
}

export default login;
