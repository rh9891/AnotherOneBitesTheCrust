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
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ImageContainer = styled.div`
  max-height: 500px;
  max-width: 500px;
  position: relative;

  .ingredients {
    position: absolute;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
`;

export const Option = styled.div`
  display: flex;
  gap: 8;
`;

export const Button = styled.button`
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
  width: 200px;

  &:hover {
    color: #786789;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0 0 50px #786789;
  }
`;
