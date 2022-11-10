import styled from "styled-components";

export const Container = styled.nav`
    width: 100%;
    height: 52px;
    color: #89969f;
    position: sticky;
    top: 0;
`;

export const List = styled.ul`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style: none;
    background-color: #1f2c34;
`;

export const Item = styled.li`
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;