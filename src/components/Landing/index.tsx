import CoolPizza from "../../assets/images/CoolPizza.png";
import * as Styled from "./Styles";

export default function Landing() {
    return (
        <Styled.Wrapper>
            <Styled.LeftPanel>
                <Styled.Image src={CoolPizza}/>
            </Styled.LeftPanel>
            <Styled.RightPanel>
                <Styled.Title>Another One Bites the Crust</Styled.Title>
                <Styled.Button href="/customize-sauce">
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
