import CoolPizza from "../../assets/images/CoolPizza.png";
import * as Styled from "./Styles";

export default function Logo() {
  return (
    <Styled.Wrapper>
      <Styled.Avatar
        src={CoolPizza}
        alt="Pizza Wearing Sunglasses" onClick={() => console.log("Boo")}
      />
      <Styled.Circle className="circle-a" />
      <Styled.Circle className="circle-b" />
      <Styled.Circle className="circle-c" />
    </Styled.Wrapper>
  );
}