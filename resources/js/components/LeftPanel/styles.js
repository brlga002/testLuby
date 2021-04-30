import styled from "styled-components";

export const Container = styled.div`
    background-color: #ddd;
    display: flex;
    flex: 1;
    max-width: 250px;
    flex-direction: column;
`;

export const Brand = styled.div`
    background-color: #fff;
    display: flex;
    flex: 1;
    max-width: 250px;
    flex-direction: column;
    max-height: 70px;
    padding: 10px;
`;

Brand.Title = styled.div``;

Brand.SubTitle = styled.div``;

export const ContainerNavigation = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 10px;
`;

ContainerNavigation.Item = styled.div``;
