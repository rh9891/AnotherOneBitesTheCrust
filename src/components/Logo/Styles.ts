import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 36px;
    width: 36px;
    position: relative;

    @keyframes ripple {
        from {
            opacity: 1;
            transform: scale(0.9);
        }
        to {
            opacity: 0;
            transform: scale(1.5);
        }
    }

    .circle-a {
        border-color: #6EE0E0;
        animation: ripple 1s infinite;
        animation-delay: 0s;
    }

    .circle-b {
        border-color: #F8CD4F;
        animation: ripple 1s infinite;
        animation-delay: 1.2s;
    }

    .circle-c {
        border-color: #E9679B;
        animation: ripple 1s infinite;
        animation-delay: 1.6s;
    }

`;

export const Circle = styled.div`
    height: 36px;
    width: 36px;
    border-radius: 100%;
    border: 1px solid white;
    position: absolute;
`;

export const Avatar = styled.img`
    background-color: #6EE0E0;
    height: 36px;
    width: 36px;
    border-radius: 100%;
    border: 1px solid white;
    position: absolute;
`;