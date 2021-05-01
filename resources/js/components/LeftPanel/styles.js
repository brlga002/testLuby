import styled from "styled-components";
import { colors } from "../../theme";

export const Container = styled.div`
  background-color: ${colors.white};
  display: ${(props) => (props.show ? "flex" : "none")};
  flex: 1;
  max-width: 250px;
  flex-direction: column;
`;

export const Brand = styled.div`
  background-color: ${colors.white};
  display: flex;
  flex: 1;
  max-width: 250px;
  flex-direction: column;
  max-height: 70px;
  padding: 10px;
`;

Brand.Title = styled.div`
  font-size: 18px;
`;

Brand.SubTitle = styled.div`
  font-size: 14px;
`;

export const ContainerNavigation = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 10px;
  background-color: ${colors.primary};
  border-radius: 0 40px 0 0;
`;

ContainerNavigation.Item = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${colors.primary};

  a {
    border: 0.5px solid #dddddd;
    padding: 15px 10px;
    border-radius: 15px;
    transition: color 0.5s, background-color 0.5s;
    width: 100%;
    text-decoration: none;
    background-color: ${colors.white};
    &:hover {
      background-color: ${colors.tertiary};
      color: ${colors.white};
    }
  }

  > * {
    &:first-child {
      margin-right: 10px;
    }
  }
`;
