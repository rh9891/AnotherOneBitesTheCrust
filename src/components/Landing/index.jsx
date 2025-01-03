import RetroPizza from "../../assets/images/RetroPizza.png";
import * as Styled from "./Styles";

export default function Landing() {
  return (
    <Styled.Wrapper>
      <Styled.LeftPanel>
        <Styled.Image src={RetroPizza} />
      </Styled.LeftPanel>
      <Styled.RightPanel>
        <Styled.Title>Another One Bites the Crust</Styled.Title>
        <Styled.Button href="/customize">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Order Up, Dude!
        </Styled.Button>
      </Styled.RightPanel>
    </Styled.Wrapper>
  );
}
