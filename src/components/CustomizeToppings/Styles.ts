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
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
`;
