import Logo from "../Logo";
import * as Styled from "./Styles";

export default function Header() {
  return (
    <Styled.Wrapper>
      <Logo />
      <Styled.Content>Another One Bites the Crust</Styled.Content>
    </Styled.Wrapper>
  );
}
