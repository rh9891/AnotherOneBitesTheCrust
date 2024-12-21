import BBQBase from "../../assets/images/BBQBase.png";
import * as Styled from "./Styles";

export default function Customize() {
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.ImageContainer>
          <img src={BBQBase} alt="BBQ Pizza Base" height="100%" width="100%" />
        </Styled.ImageContainer>
      </Styled.Container>
      <Styled.Container>Checkbox</Styled.Container>
    </Styled.Wrapper>
  );
}
