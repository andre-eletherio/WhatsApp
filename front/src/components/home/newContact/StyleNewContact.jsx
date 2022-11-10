import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: auto;
`;

export const NewContactContainer = styled.li`
    width: 100%;
    height: 70px;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 16px;
    gap: 20px;
    background-color: #121b22;

    :active {
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

export const NCInputContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    background-color: #121b22;
    border-bottom: 1px solid #222d3497;
`;

export const NCInput = styled.input`
    width: 80%;
    height: 60%;
    border: none;
    border-radius: 20px;
    background-color: #1f2c34;
    font-size: 110%;
    padding: 0 16px;
    color: #fff;

    :focus {
        outline-width: 0;
    }
`;

export const NCSend = styled.img`
    height: 60%;
`;