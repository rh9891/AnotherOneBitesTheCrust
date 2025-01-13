import RetroPizza from '../../assets/images/RetroPizza.png'
import * as Styled from "./Styles";

export default function Header() {
  return (
    <Styled.Wrapper>
      <img src={RetroPizza} height={36} width={36} />
      <Styled.Content>Another One Bites the Crust</Styled.Content>
    </Styled.Wrapper>
  );
}
