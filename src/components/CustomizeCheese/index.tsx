import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

import { CheeseType, Ingredients } from "../../Types";
import Header from "../Header";
import PizzaSauce from "../PizzaSauce";
import PizzaCheese from "../PizzaCheese";
import * as Styled from "./Styles";

type CustomizeCheeseProps = {
  ingredients: Ingredients;
  setIngredients: Dispatch<SetStateAction<Ingredients>>;
};

type Cheese = {
  id: CheeseType;
  label: string;
};

const cheeses: Cheese[] = [
  { id: "vegan-cheese", label: "Like A Vegan" },
  { id: "ricotta-cheese", label: "Ricotta Be Startin' Something" },
  { id: "mozzarella-cheese", label: "I Wanna Mozzarella Somebody" },
  { id: "goat-cheese", label: "Sweet Dreams Are Made of (Goat) Cheese" }
];

export default function CustomizeCheese({
                                          ingredients,
                                          setIngredients
                                        }: CustomizeCheeseProps) {
  const navigate = useNavigate();

  const handleCheeseChange = (cheese: CheeseType) => {
    setIngredients((prev: Ingredients) => ({ ...prev, cheese: cheese }));
  };

  const handleGoBack = () => {
    navigate("/customize-sauce");
  };

  const handleNextPage = () => {
    navigate("/customize-additional-toppings");
  };

  return (
    <Styled.Wrapper>
      <Header />
      <Styled.CustomizationContainer>
        <Styled.Card>
          <Styled.Container>
            <Styled.ImageContainer>
              <PizzaCheese cheese={ingredients.cheese} />
              <PizzaSauce sauce={ingredients.sauce} />
            </Styled.ImageContainer>
          </Styled.Container>
          <Styled.OptionsContainer>
            <Styled.DirectionContainer>
              <Styled.Title>Choose Your Cheesy Anthem</Styled.Title>
              <Styled.Description>Every great pizza deserves a legendary cheese. Pick your favorite hit and
                make your pizza sing!</Styled.Description>
            </Styled.DirectionContainer>
            <div>
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
            </div>
            <Styled.ButtonContainer>
              <Styled.Button onClick={handleGoBack}>
                Go Back
              </Styled.Button>
              <Styled.Button onClick={handleNextPage}>
                Customize Toppings
              </Styled.Button>
            </Styled.ButtonContainer>
          </Styled.OptionsContainer>
        </Styled.Card>
      </Styled.CustomizationContainer>
    </Styled.Wrapper>
  );
}
