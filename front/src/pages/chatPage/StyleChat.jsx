import styled from "styled-components";
import wallpaper from "../../assets/img/wallpaper.png"

export const Container = styled.section`
    width: 100%;
    height: calc(100vh - 60px);
`;

export const Body = styled.section`
    width: 100%;
    height: 100%;
    background-image: url(${wallpaper});
    display: flex;
    justify-content: center;
`;

export const Messages = styled.section`
    width: 100%;
    max-height: calc(100vh - 120px);
    display: flex;
    flex-direction: column-reverse;
    gap: 6px;
    padding-top: 10px;
    color: #fff;
    overflow-y: scroll;
`;

export const MessageChatSelf = styled.p`
    background-color: #005c4b;
    align-self: flex-end;
    word-wrap: break-word;
    max-width: 65%;
    margin-right: 5%;
    line-height: 19px;
    color: #fff;
    padding: 6px 10px 6px 10px;
    border-radius: 0.5em;
    position: relative;

    &::after {
        content: '';
        border: 7px solid transparent;
        border-top-color: #005c4b;
        position: absolute;
        top: 0;
        right: -6px;
    }
`;

export const MessageChatOther = styled.p`
    background-color: #202c33;
    align-self: flex-start;
    word-wrap: break-word;
    max-width: 65%;
    margin-left: 5%;
    font-size: 14.2px;
    font-weight: 400;
    line-height: 19px;
    color: #fff;
    padding: 6px 20px 6px 10px;
    border-radius: 0.5em;
    position: relative;

    &::after {
        content: '';
        border: 15px solid transparent;
        border-top-color: #202c33;
        position: absolute;
        top: 0;
        left: -8px;
    }
`;