import styled from "styled-components";

export const Title = styled.h1`
  font-size: 25px;
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
