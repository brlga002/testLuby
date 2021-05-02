import styled from "styled-components";
import { colors } from "../../theme";

export const Container = styled.div`
  background-color: ${colors.white};
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const NavBar = styled.div`
  background-color: ${colors.secondary};
  color: ${colors.white};
  display: flex;
  width: 100%;
  flex-direction: row;
  height: 70px;
  box-sizing: border-box;
  font-size: 18px;
  position: fixed;
`;

NavBar.Text = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 5px;
`;

export const ToggleMenu = styled.div`
  height: 70px;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;

  > * {
    &:first-child {
      cursor: pointer;
    }
  }
`;

export const Content = styled.div`
  margin-top: 70px;
  padding: 22px;
`;
