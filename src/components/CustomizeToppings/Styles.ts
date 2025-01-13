import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CustomizationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 24px;
  margin: 32px 16px;

  @media only screen and (max-width: 765px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Container = styled.div`
  display: flex;
  min-width: 500px;

  @media only screen and (max-width: 765px) {
    min-width: 0;
  }
`;

export const ImageContainer = styled.div`
  max-height: 500px;
  max-width: 500px;
  position: relative;

  .ingredients {
    position: absolute;
  }

  .toppings {
    position: absolute;
    right: 50px;
    top: 50px;
    height: 80%;
    width: 80%;
    margin-top: -100px;
  }

  .chicken,
  .ham {
    position: absolute;
    right: 70px;
    top: 70px;
    height: 70%;
    width: 70%;
    margin-top: -100px;
  }

  .pineapple,
  .olives {
    position: absolute;
    margin-top: -100px;
  }

  @media only screen and (max-width: 765px) {
    max-width: 375px;

    .toppings {
    position: absolute;
    right: 40px;
    top: 40px;
    height: 80%;
    width: 80%;
    margin-top: -100px;
  }

  .chicken,
  .ham {
    position: absolute;
    right: 60px;
    top: 60px;
    height: 70%;
    width: 70%;
    margin-top: -100px;
  }
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 500px;
`;

export const DirectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.div`
  font-family: "Luckiest Guy", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 2rem;
`;

export const Description = styled.div``;

export const Option = styled.div`
  display: flex;
  gap: 8;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

   @media only screen and (max-width: 765px) {
    justify-content: center;
  }
`;

export const Button = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  color: #ffffff;
  background: #786789;
  border-radius: 8px;
  border: none;
  text-decoration: none;
  font-size: 1rem;
  overflow: hidden;
  transition: 0.2s;
  max-width: 200px;
  cursor: pointer;

  &:hover {
    color: #786789;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0 0 50px #786789;
  }
`;
