import styled from "styled-components";

export const Page = styled.section`
    width: 100%;
    height: 100vh;
    background-color: #121b22;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Header = styled.header`
    width: 100%;
    height: 52px;
    background-color: #1f2c34;
    display: flex;
    align-items: center;
    padding: 0 20px;
    color: #89969f;
    font-size: 100%;
    gap: 20px;
`;

export const Back = styled.img`
    height: 30%;
`;

export const ProfileContainer = styled.section`
    width: 46%;
    height: 46vw;
    max-height: 200px;
    max-width: 200px;
    margin-top: 30px;
    position: relative;

    :hover {
        opacity: 0.8;
    }
`;

export const ProfileImg = styled.img`
    height: 100%;
    border-radius: 50%;
    position: absolute;
`;

export const CameraContainer = styled.div`
    width: 30%;
    height: 14vw;
    background-color: #00a884;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    right: 0;
    max-width: 60px;
    max-height: 60px;
`;

export const CameraIcon = styled.img`
    width: 60%;
`;

export const NameContainer = styled.section`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 20px;
    align-items: center;
    margin-top: 46px;
`;
export const Img = styled.img`
    width: 60%;
    max-width: 30px;
`;
export const NameAndTitle = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 3px;
    height: 40px;
    padding: 0 16px;
`;

export const Title = styled.p`
    color: #8696a0;
    font-size: 90%;
`;
export const Name = styled.p`
    color: #fff;
    font-size: 1em;
`

export const InputName = styled.input`
    width: 80%;
    height: 40px;
    background-color: transparent;
    border: none;
    color: #fff;
    border-bottom: 1px solid #222d3497;
    padding: 0 16px;
    font-size: 1em;

    :focus {
        outline-width: 0;
    }
`;

export const PencilContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    max-width: 30px;
    background-color: transparent;
    border: none;
    justify-content: flex-end;
    align-items: center;
`;

export const PencilImg = styled.img`
    width: 80%;
`;

export const Warning = styled.p`
    color: #8696a0;
    font-size: 84%;
    width: 100%;
    padding: 0 20px 0 calc(20px + 9%);
    margin-top: 11px;
`;