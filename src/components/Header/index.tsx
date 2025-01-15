import CoolPizza from '../../assets/images/CoolPizza.png'
import * as Styled from "./Styles";

export default function Header() {
    return (
        <Styled.Wrapper>
            <img src={CoolPizza} height={36} width={36}/>
            <Styled.Content>Another One Bites the Crust</Styled.Content>
        </Styled.Wrapper>
    );
}
