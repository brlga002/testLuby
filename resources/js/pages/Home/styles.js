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

export const ContainerFilter = styled.div`
  width: 300px;
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
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-radius: 5px;
  height: 40px;
  border: 1px solid #dadada;
  transition: opacity 0.2s;
  margin: 15px 5px;
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

Form.Label = styled.label`
  position: absolute;
  top: -13px;
  left: 5px;
  background-color: #fff;
  padding: 5px;
  font-size: 12px;
`;

Form.Title = styled.h1`
  font-size: 16px;
  margin-bottom: 20px;
`;

export const ButtonStyle = styled.button`
  flex: 1;
  width: 100%;
  color: #fff;
  background-color: ${colors.primary};
  border-radius: 5px;
  min-height: 55px;
  transition-delay: 1s;
  transition: color 1s, background-color 1s;
  border: 0 none;

  &:hover {
    filter: brightness(90%);
  }
`;
