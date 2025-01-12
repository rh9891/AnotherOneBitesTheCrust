import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CustomizationContainer = styled.div`
  display: flex;
`;

export const Container = styled.div`
  flex: 1;
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
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
`;

export const OptionsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const DirectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.div`
  font-size: 1.25rem;
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
