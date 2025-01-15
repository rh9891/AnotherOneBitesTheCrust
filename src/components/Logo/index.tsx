import { useNavigate } from "react-router-dom";

import CoolPizza from "../../assets/images/CoolPizza.png";
import * as Styled from "./Styles";

export default function Logo() {
  const navigate = useNavigate();
  const handleBackNavigation = () => {
    navigate("/");
  };

  return (
    <Styled.Wrapper onClick={handleBackNavigation}>
      <Styled.Avatar
        src={CoolPizza}
        alt="Pizza Wearing Sunglasses"
      />
      <Styled.Circle className="circle-a" />
      <Styled.Circle className="circle-b" />
      <Styled.Circle className="circle-c" />
    </Styled.Wrapper>
  );
}