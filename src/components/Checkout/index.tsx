import { Dispatch, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";

import { cheeseNames, Ingredients, LOCAL_STORAGE_KEY, sauceNames, toppingNames } from "../../Types";
import Header from "../Header";
import DrinkingPizza from "../../assets/images/DrinkingPizza.png";
import * as Styled from "./Styles";

type CheckoutProps = {
  ingredients: Ingredients;
  setIngredients: Dispatch<SetStateAction<Ingredients>>;
};

export default function Checkout({ ingredients, setIngredients }: CheckoutProps) {
  const navigate = useNavigate();
  const { sauce, cheese, toppings } = ingredients;
  const sauceName = sauceNames[sauce];
  const cheeseName = cheeseNames[cheese];
  const toppingNamesList = toppings.map((topping) => toppingNames[topping]);
  const additionalToppings = toppingNamesList.length > 0;

  const [completeOrder, setCompleteOrder] = useState<boolean>(false);

  const handleGoBack = () => {
    navigate("/customize-additional-toppings");
  };

  const handleCompleteOrder = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    setCompleteOrder(true);
  };

  const handleNewOrder = () => {
    const defaultIngredients: Ingredients = {
      sauce: "tomato-sauce",
      cheese: "vegan-cheese",
      toppings: []
    };
    setIngredients(defaultIngredients);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(defaultIngredients));
    navigate("/customize-sauce");
    setCompleteOrder(false);
  };

  return (
    <Styled.Wrapper>
      <Header />
      <Styled.CardWrapper>
        <Styled.Card>
          <Styled.Image
            completeOrder={completeOrder}
            src={DrinkingPizza}
            alt="Pizza Drinking Soda"
          />
          <Styled.DetailsWrapper>
            <Styled.Title>{completeOrder ? "Your Pizza Mixtape Is on Its Way!" : "Encore, Pizza Star!"}</Styled.Title>
            <Styled.OrderDetails>
              {completeOrder ?
                <Styled.OrderDetailDescription>Crank up the tunes because your custom pizza creation is in the works!
                  With hits like {sauceName}, {cheeseName}, and a chart-topping lineup
                  of {additionalToppings ? "toppings you chose" : "classic simplicity"}, this pie is sure to be a
                  number-one hit. Sit tight—the flavor revolution will arrive
                  shortly!</Styled.OrderDetailDescription> : <>
                  <Styled.OrderDetailDescription>
                    Before we hit the stage with your custom creation, let’s make sure every topping is in tune and your
                    cheese choice hits all the right notes. Here's your pizza lineup so far:
                  </Styled.OrderDetailDescription>
                  {additionalToppings && (
                    <ul>
                      <li>Sauce: {sauceName}</li>
                      <li>Cheese: {cheeseName}</li>
                      <li>Toppings:</li>
                      <ul>
                        {toppingNamesList.map((topping) => (
                          <li key={topping}>{topping}</li>
                        ))}
                      </ul>
                    </ul>
                  )}</>}
            </Styled.OrderDetails>
            <Styled.ButtonContainer>
              {completeOrder ?
                (<Styled.Button onClick={handleNewOrder}>Order Again</Styled.Button>) : (<><Styled.Button
                  onClick={handleGoBack}>
                  Go Back
                </Styled.Button>
                  <Styled.Button onClick={handleCompleteOrder}>
                    Place Order
                  </Styled.Button>
                </>)}
            </Styled.ButtonContainer>
          </Styled.DetailsWrapper>
        </Styled.Card>
      </Styled.CardWrapper>
    </Styled.Wrapper>
  );
}
