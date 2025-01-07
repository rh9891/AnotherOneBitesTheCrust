import { Dispatch, SetStateAction } from "react"

import { Ingredients } from "../../Types";
import Header from "../Header";
import BBQBase from "../../assets/images/BBQBase.png";
import TomatoBase from "../../assets/images/TomatoBase.png";
import RomescoBase from "../../assets/images/RomescoBase.png";
import PestoBase from "../../assets/images/PestoBase.png";
import SpinachBase from "../../assets/images/SpinachBase.png";
import * as Styled from "./Styles";

type  CustomizeSauceProps = {
  sauce: string;
  setIngredients: Dispatch<SetStateAction<Ingredients>>;
}

export default function CustomizeSauce({
  sauce,
  setIngredients,
}: CustomizeSauceProps) {
  const handleSauceChange = (sauce: string) => {
    setIngredients((prev: Ingredients) => ({ ...prev, sauce: sauce }));
  };

  return (
    <Styled.Wrapper>
      <Header />
      <Styled.CustomizationContainer>
        <Styled.Container>
          <Styled.ImageContainer>
          {(sauce === "tomato-sauce" || sauce === "") && (<Styled.Image src={TomatoBase} alt="Tomato Sauce" />)}
          {sauce === "romesco-sauce" && (<Styled.Image
              src={RomescoBase}
              alt="Romesco Sauce"
            />)}
{sauce === "pesto-sauce" && (<Styled.Image
              src={PestoBase}
              alt="Pesto Sauce"
            />)}
          {sauce === "creamy-spinach-sauce" && (<Styled.Image
              src={SpinachBase}
              alt="Creamy Spinach Sauce"
            />)}
          {sauce === "bbq-sauce" && (<Styled.Image
              src={BBQBase}
              alt="BBQ Sauce"
            />)}
          </Styled.ImageContainer>
        </Styled.Container>
        <Styled.OptionsContainer>
        {[
            { id: "tomato-sauce", label: "Tomato Sauce" },
            { id: "romesco-sauce", label: "Romesco Sauce" },
            { id: "creamy-spinach-sauce", label: "Spinach Sauce" },
            { id: "bbq-sauce", label: "BBQ Sauce" },
            { id: "pesto-sauce", label: "Pesto Sauce" },
          ].map((option) => (
            <Styled.Option key={option.id}>
              <input
                type="radio"
                id={option.id}
                name="sauce"
                value={option.id}
                checked={sauce === option.id}
                onChange={() => handleSauceChange(option.id)}
              />
              <label htmlFor={option.id}>{option.label}</label>
            </Styled.Option>
          ))}
        </Styled.OptionsContainer>
      </Styled.CustomizationContainer>
    </Styled.Wrapper>
  );
}