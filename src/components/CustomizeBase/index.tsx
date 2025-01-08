import { Dispatch, SetStateAction } from "react"

import { Ingredients, CheeseType } from "../../Types";
import Header from "../Header";
import PizzaBase from "../PizzaBase";
import PizzaCheese from "../PizzaCheese";
import * as Styled from "./Styles";

type CustomizeBaseProps = {
  ingredients: Ingredients;
  setIngredients: Dispatch<SetStateAction<Ingredients>>;
}

type Cheese = {
  id: CheeseType;
  label: string;
};

const cheeses: Cheese[] = [
    { id: "vegan-cheese", label: "Vegan Cheese" },
    { id: "ricotta-cheese", label: "Ricotta Cheese" },
    { id: "mozarella-cheese", label: "Mozarella Cheese" },
    { id: "goat-cheese", label: "Goat Cheese" },
  ]

export default function CustomizeBase({ingredients, setIngredients}: CustomizeBaseProps) {
  const handleCheeseChange = (cheese: CheeseType) => {
    setIngredients((prev: Ingredients) => ({ ...prev, cheese: cheese }));
  };

  return (
    <Styled.Wrapper>
      <Header />
      <Styled.CustomizationContainer>
        <Styled.Container>
          <Styled.ImageContainer>
          <PizzaCheese cheese={ingredients.cheese} />
            <PizzaBase sauce={ingredients.sauce} />
          </Styled.ImageContainer>
        </Styled.Container>
        <Styled.Container>
          {cheeses.map((option) => (
                      <Styled.Option key={option.id}>
                        <input
                          type="radio"
                          id={option.id}
                          name="cheese"
                          value={option.id}
                          checked={ingredients.cheese === option.id}
                          onChange={() => handleCheeseChange(option.id)}
                        />
                        <label htmlFor={option.id}>{option.label}</label>
                      </Styled.Option>
                    ))}
        </Styled.Container>
      </Styled.CustomizationContainer>
    </Styled.Wrapper>
  );
}