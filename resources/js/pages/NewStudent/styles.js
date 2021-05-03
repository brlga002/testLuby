import styled from "styled-components";
import { colors } from "../../theme";

export const Title = styled.h1`
  font-size: 25px;
  margin-bottom: 20px;
`;

export const CardForm = styled.div`
  padding: 10px;
  display: flex;
  border-radius: 10px;
  border: 0.5px solid #dddddd;
  box-shadow: 0px 0px 25px rgba(7, 71, 166, 0.1);
  box-sizing: border-box;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Form = styled.form``;

export const FormContainer = styled.div`
  flex: 1;
  margin-bottom: 5px;
  min-width: 300px;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

FormContainer.IconContainer = styled.div`
  flex: 1;
  height: 40px;
  max-width: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 14px;
  cursor: pointer;
`;

FormContainer.InputGroup = styled.div`
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

FormContainer.Input = styled.input`
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

FormContainer.Label = styled.label`
  position: absolute;
  top: -13px;
  left: 5px;
  background-color: #fff;
  padding: 5px;
  font-size: 12px;
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
