import styled from "styled-components";

export const Form = styled.form`
    width: 98%;
    height: 46px;
    position: fixed;
    bottom: 3px;
    display: flex;
    gap: 3px;
    background-color: transparent;
`;

export const Input = styled.input`
    width: 100%;
    height: 100%;
    background-color: #1f2c34;
    border-radius: 30px;
    border: none;
    padding: 0 20px;
    font-size: 120%;
    color: #fff;

    :focus {
        outline-width: 0;
    }
`;

export const Button = styled.button`
    background-color: transparent;
    border: none;
    max-height: 46px;
    max-width: 46px;
`;

export const Img = styled.img`
    width: 100%;
`;