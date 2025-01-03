import Header from "../Header";
import BBQBase from "../../assets/images/BBQBase.png";
import Cheese from "../../assets/images/Cheese.png";
import SunDriedTomatoes from "../../assets/images/SunDriedTomatoes.png";
import Mushrooms from "../../assets/images/Mushrooms.png";
import Olives from "../../assets/images/Olives.png";
import Pineapple from "../../assets/images/Pineapple.png";

import * as Styled from "./Styles";

export default function Customize() {
  return (
    <>
      <Header />
      <Styled.Wrapper>
        <Styled.Container>
          <Styled.ImageContainer>
            <Styled.Image src={BBQBase} alt="BBQ Pizza Base" />
            <Styled.Image className="ingredients" src={Cheese} alt="Cheese" />
            <Styled.Image
              className="ingredients"
              src={SunDriedTomatoes}
              alt="Sun Dried Tomatoes"
            />
            <Styled.Image
              className="ingredients"
              src={Mushrooms}
              alt="Mushrooms"
            />
            <Styled.Image className="ingredients" src={Olives} alt="Olives" />
            <Styled.Image
              className="ingredients"
              src={Pineapple}
              alt="Pineapple"
            />
          </Styled.ImageContainer>
        </Styled.Container>
        <Styled.Container>
          <input
            type="checkbox"
            id="pineapple"
            name="pineapple"
            value="pineapple"
            onChange={() => console.log("pineapple")}
          />
          <label> Pineapple</label>
        </Styled.Container>
      </Styled.Wrapper>
    </>
  );
}
