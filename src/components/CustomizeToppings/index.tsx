import { Dispatch, SetStateAction } from "react";

import { Ingredients } from "../../Types";
import Header from "../Header";
import PizzaCheese from "../PizzaCheese";
import PizzaBase from "../PizzaBase";
import Basil from "../../assets/images/Basil.png";
import Mushrooms from "../../assets/images/Mushrooms.png";
import Olives from "../../assets/images/Olives.png";
import Pineapple from "../../assets/images/Pineapple.png";
import Prawns from "../../assets/images/Prawns.png";
import SpringOnions from "../../assets/images/SpringOnions.png";
import SunDriedTomatoes from "../../assets/images/SunDriedTomatoes.png";
import Tomato from "../../assets/images/Tomato.png";
import * as Styled from "./Styles";

type CustomizeToppingsProps = {
  ingredients: Ingredients;
  setIngredients: Dispatch<SetStateAction<Ingredients>>;
};

type Topping = {
  id: string;
  label: string;
  image: string;
};

const toppings: Topping[] = [
  { id: "prawns", label: "Prawns", image: Prawns },
  { id: "tomato", label: "Tomato", image: Tomato },
  { id: "spring-onions", label: "Spring Onions", image: SpringOnions },
  { id: "basil", label: "Basil", image: Basil },
  { id: "mushrooms", label: "Mushrooms", image: Mushrooms },
  { id: "olives", label: "Olives", image: Olives },
  { id: "pineapple", label: "Pineapple", image: Pineapple },
];

export default function CustomizeToppings({
  ingredients,
  setIngredients,
}: CustomizeToppingsProps) {
  const handleToppingChange = (topping: string) => {
    setIngredients((prev: Ingredients) => {
      const isToppingSelected = prev.toppings.includes(topping);
      const updatedToppings = isToppingSelected
        ? prev.toppings.filter((t) => t !== topping)
        : [...prev.toppings, topping];

      return { ...prev, toppings: updatedToppings };
    });
  };

  return (
    <Styled.Wrapper>
      <Header />
      <Styled.CustomizationContainer>
        <Styled.Container>
          <Styled.ImageContainer>
          <PizzaCheese cheese={ingredients.cheese} />
            {ingredients.toppings.map((topping) => {
              const toppingData = toppings.find((t) => t.id === topping);
              return (
                <Styled.Image
                  key={toppingData?.id}
                  className="ingredients"
                  src={toppingData?.image}
                  alt={toppingData?.label}
                />
              );
            })}
            <PizzaBase sauce={ingredients.sauce} />
          </Styled.ImageContainer>
        </Styled.Container>
        <Styled.Container>
          {toppings.map((topping) => (
            <Styled.Option key={topping.id}>
              <input
                type="checkbox"
                id={topping.id}
                value={topping.id}
                checked={ingredients.toppings.includes(topping.id)}
                onChange={() => handleToppingChange(topping.id)}
              />
              <label htmlFor={topping.id}>{topping.label}</label>
            </Styled.Option>
          ))}
        </Styled.Container>
      </Styled.CustomizationContainer>
    </Styled.Wrapper>
  );
}
