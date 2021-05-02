import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  z-index: 99999;
  -webkit-transition: display 400ms ease-in;
  -moz-transition: display 400ms ease-in;
  transition: display 400ms ease-in;
  display: ${(props) => (props.show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Main = styled.div`
  background-color: #fefefe;
  padding: 20px;
  border: 1px solid #888;
  max-width: 600px;
  flex: 1;
  border-radius: 20px;
  min-height: 300px;
  max-height: 700px;
  display: flex;
  flex-direction: column;
`;

Main.Content = styled.div`
  flex: 1;
  /* overflow: auto; */
`;

export const ContainerButton = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
`;

export const Title = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 20px;
`;

export const Close = styled.div`
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  position: relative;
  right: 0;
  /* top: -8px; */

  &:hover {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;
