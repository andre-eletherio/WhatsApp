import styled from "styled-components";

export const Container = styled.li`
    width: 100%;
    height: 60px;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 6px;
    background-color: #1f2c34;

    :hover {
        background-color: #33414b;
    }
`;

export const Back = styled.img`
    height: 40%;
    margin-right: 3px;
`;

export const Image = styled.img`
    height: 66%;
    border-radius: 50%;
    margin-right: 10px;
`;

export const Name = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 110%;
`;