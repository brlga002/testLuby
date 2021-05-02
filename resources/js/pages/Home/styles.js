import styled from "styled-components";
import { colors } from "../../theme";

export const Title = styled.h1`
  font-size: 25px;
  margin-bottom: 20px;
`;

export const ContainerIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  > * {
    cursor: pointer;
    border-radius: 10px;
  }
`;

export const Form = styled.div`
  flex: 1;
  flex-direction: column;
  margin: auto 0;
  min-width: 300px;
`;

Form.IconContainer = styled.div`
  flex: 1;
  height: 40px;
  max-width: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 14px;
`;

Form.InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-radius: 5px;
  height: 40px;
  border: 1px solid #dadada;
  transition: opacity 0.2s;
  &:hover {
    border: 1px solid ${colors.primary};
  }
`;

Form.Input = styled.input`
  flex: 1;
  width: 100%;
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
  border-radius: 5px;
  color: #99abb4;
  font-size: 16px;
  margin-left: 14px;
`;
