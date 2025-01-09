import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

import { Ingredients, SauceType } from "../../Types";
import Header from "../Header";
import PizzaBase from "../PizzaBase";
import * as Styled from "./Styles";

type CustomizeSauceProps = {
  sauce: SauceType;
  setIngredients: Dispatch<SetStateAction<Ingredients>>;
};

type Sauce = {
  id: SauceType;
  label: string;
};

const sauces: Sauce[] = [
  { id: "tomato-sauce", label: "Tomato Sauce" },
  { id: "romesco-sauce", label: "Romesco Sauce" },
  { id: "creamy-spinach-sauce", label: "Creamy Spinach Sauce" },
  { id: "bbq-sauce", label: "BBQ Sauce" },
  { id: "pesto-sauce", label: "Pesto Sauce" },
];

export default function CustomizeSauce({
  sauce,
  setIngredients,
}: CustomizeSauceProps) {
  const navigate = useNavigate();

  const handleSauceChange = (sauce: SauceType) => {
    setIngredients((prev: Ingredients) => ({ ...prev, sauce: sauce }));
  };

  const handleNextPage = () => {
    navigate("/customize-cheese");
  };

  return (
    <Styled.Wrapper>
      <Header />
      <Styled.CustomizationContainer>
        <Styled.Container>
          <Styled.ImageContainer>
            <PizzaBase sauce={sauce} />
          </Styled.ImageContainer>
        </Styled.Container>
        <Styled.OptionsContainer>
          {sauces.map((option) => (
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
          <Styled.Button onClick={handleNextPage}>
            Customize Cheese
          </Styled.Button>
        </Styled.OptionsContainer>
      </Styled.CustomizationContainer>
    </Styled.Wrapper>
  );
}
