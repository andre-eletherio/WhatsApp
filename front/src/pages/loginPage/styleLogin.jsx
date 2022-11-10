import styled from "styled-components";

export const LoginStyle = styled.section`
    width: 100%;
    min-height: 100vh;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Logo = styled.img`
    width: 60%;
    margin-top: 30px;
    max-width: 300px;
`;

export const Login = styled.h1`
    font-size: 200%;
    margin-top: 60px;
`;

export const Form = styled.form`
    width: 90%;
    margin-top: 26px;
    display: flex;
    flex-direction: column;
    gap: 14px;
`;

export const Input = styled.input`
    width: 100%;
    height: 50px;
    background-color: #33414b;
    border: none;
    border-radius: 30px;
    padding: 0 20px;
    font-size: 120%;
    color: #fff;

    :focus {
        outline-width: 0;
    }
`;

export const Button = styled.button`
    width: 50%;
    height: 46px;
    background-color: #98db7c;
    border: none;
    border-radius: 30px;
    align-self: center;
    margin-top: 6px;
    box-shadow: 0 3px 20px #3e5a32;
    color: #ffffff;
    font-size: 130%;

    :hover {
        background-color: #638d51;
    }
`;

export const NewAccount = styled.p`
    color: #fff;
    margin-top: 30px;
`;

export const Link = styled.a`
    color: #fff;
    cursor: pointer;
`;