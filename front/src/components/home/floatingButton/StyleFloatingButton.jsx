import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    bottom: 18px;
    right: 18px;
    z-index: 998;
    /* cursor: pointer; */

    .fab-icon-holder {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #00a884;
        box-shadow: 1px 3px 20px #000;
        display: flex;
        align-items: center;
        justify-content: center;

        :hover {
            opacity: 0.8;
        }
    }

    .fab-icon-holder img {

        height: 60%;
    }

    .fab {
        width: 54px;
        height: 54px;
        background-color: #00a884;
    }

    .fab-options {
        list-style: none;
        margin: 0;

        position: absolute;
        bottom: 70px;
        right: 2px;

        opacity: 0;

        transition: all 0.3s ease;
        transform: scale(0);
        transform-origin: 85% bottom;

        :hover {
            opacity: 1;
        }
    }

    .fab:hover + .fab-options, .fab-options:hover {
        opacity: 1;
        transform: scale(1);
    }

    .fab-options li {
        display: flex;
        justify-content: flex-end;
        padding: 5px;
    }

    .fab-label {
        padding: 6px 10px;
        align-self: center;
        user-select: none;
        white-space: nowrap;
        border-radius: 20px;
        font-size: 16px;
        background-color: #00a884;
        color: #fff;
        box-shadow: 1px 3px 10px #000;
        margin-right: 10px;
    }
`;