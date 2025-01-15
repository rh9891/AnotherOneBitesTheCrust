import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const CardWrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    padding: 2rem;
    box-sizing: border-box;
    line-height: 1.5;
`;

export const Card = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    border: 1px solid #e1e1e1;
    border-radius: 15px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    max-width: 600px;
    background: #FFFFFF;
    overflow: hidden;

    @media screen and (min-width: 550px) {
        grid-template-columns: 1fr 2fr;
    }
`;

export const Image = styled.img<{ completeOrder: boolean }>`
    height: 100%;
    width: 100%;
    object-fit: contain;
    background-color: ${({ completeOrder }) =>
            completeOrder ? "#B9A3D1" : "#6EE0E0"};`;

export const DetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 0 1rem 1rem 1rem;
`;

export const Title = styled.h1`
    text-align: center;
    margin: 1rem 0 0;
    font-family: "Luckiest Guy", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 2rem;
`;

export const OrderDetails = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const OrderDetailDescription = styled.div`
    margin: 0;
`;

export const ButtonContainer = styled.div`
    display: flex;
    gap: 16px;
    justify-content: center;
`;

export const Button = styled.a`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    color: #FFFFFF;
    background: #B9A3D1;
    border-radius: 8px;
    border: none;
    text-decoration: none;
    font-size: 1rem;
    overflow: hidden;
    transition: 0.2s;
    max-width: 200px;
    cursor: pointer;

    &:hover {
        color: #FFFFFF;
        background: #F8CD4F;
        border-radius: 8px;
        box-shadow: 0 0 10px #F8CD4F;
    }
`;