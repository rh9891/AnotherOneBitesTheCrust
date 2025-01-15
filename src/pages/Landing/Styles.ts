import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;

    @media only screen and (max-width: 600px) {
        flex-direction: column;
        margin-bottom: 24px;
    }
`;

export const LeftPanel = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`;

export const Image = styled.img`
    max-width: 100%;
    height: auto;
    object-fit: contain;
`;

export const RightPanel = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const Button = styled.a`
    position: relative;
    display: flex;
    align-items: center;
    padding: 15px 30px;
    color: #6EE0E0;
    text-decoration: none;
    font-family: "Luckiest Guy", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 2rem;
    overflow: hidden;
    transition: 0.2s;

    &:visited {
        color: #6EE0E0;
    }

    &:hover {
        color: #FFFFFF;
        background: #6EE0E0;
        border-radius: 8px;
        box-shadow: 0 0 50px #6EE0E0;
    }

    a:nth-child(1) {
        filter: hue-rotate(270deg);
    }

    a:nth-child(2) {
        filter: hue-rotate(110deg);
    }

    span {
        position: absolute;
        display: block;
    }

    span:nth-child(1) {
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, transparent, #6EE0E0);
        animation: animate-a 1s linear infinite;
    }

    @keyframes animate-a {
        0% {
            left: -100%;
        }
        50%,
        100% {
            left: 100%;
        }
    }

    span:nth-child(2) {
        top: -100%;
        right: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(180deg, transparent, #6EE0E0);
        animation: animate-b 1s linear infinite;
        animation-delay: 0.25s;
    }

    @keyframes animate-b {
        0% {
            top: -100%;
        }
        50%,
        100% {
            top: 100%;
        }
    }

    span:nth-child(3) {
        bottom: 0;
        right: 0;
        width: 100%;
        height: 2px;
        background: linear-gradient(270deg, transparent, #6EE0E0);
        animation: animate-c 1s linear infinite;
        animation-delay: 0.5s;
    }

    @keyframes animate-c {
        0% {
            right: -100%;
        }
        50%,
        100% {
            right: 100%;
        }
    }

    span:nth-child(4) {
        bottom: -100%;
        left: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(360deg, transparent, #6EE0E0);
        animation: animate-d 1s linear infinite;
        animation-delay: 0.75s;
    }

    @keyframes animate-d {
        0% {
            bottom: -100%;
        }
        50%,
        100% {
            bottom: 100%;
        }
    }
`;

export const Title = styled.div`
    font-family: "Luckiest Guy", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 3rem;
    color: #FFFFFF;
    text-align: center;
    margin: 16px;
`;
