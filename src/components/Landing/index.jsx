import RetroPizza from "../../assets/images/RetroPizza.png";
import * as Styled from "./Styles";

export default function Landing() {
  return (
    <Styled.Wrapper>
      <Styled.LeftPanel>
        <img src={RetroPizza} height="300px" width="300px" />
      </Styled.LeftPanel>
      <Styled.RightPanel>
        <h1>Another One Bites the Crust</h1>
        <Styled.Button href="/customize">Start Order</Styled.Button>
      </Styled.RightPanel>
    </Styled.Wrapper>
  );
}
