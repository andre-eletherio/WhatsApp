import styled from "styled-components";

export const Container = styled.li`
    width: 100%;
    height: 70px;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 16px;
    gap: 20px;
    background-color: #121b22;

    :hover {
        background-color: #33414b;
    }
`;

export const Image = styled.img`
    height: 66%;
    border-radius: 50%;
`;

export const Name = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 116%;
    border-bottom: 1px solid #222d3497;
    position: relative;
`;

export const Notification = styled.div`
    height: 18px;
    width: 18px;
    background-color: #00a884;
    border-radius: 100%;
    position: absolute;
    right: 0;
`;