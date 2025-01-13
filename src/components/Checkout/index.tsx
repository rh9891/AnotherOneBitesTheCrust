import {
  Ingredients,
  sauceNames,
  cheeseNames,
  toppingNames,
} from "../../Types";

type CheckoutProps = {
  ingredients: Ingredients;
};

export default function Checkout({ ingredients }: CheckoutProps) {
  const { sauce, cheese, toppings } = ingredients;

  const sauceName = sauceNames[sauce];
  const cheeseName = cheeseNames[cheese];
  const toppingNamesList = toppings.map((topping) => toppingNames[topping]);
  const additionalToppings = toppingNamesList.length > 0;

  return (
    <div>
      <h1>Review Your Order</h1>
      <p>
        You've ordered a pizza with {sauceName} and {cheeseName}
        {!additionalToppings && "."}
        {additionalToppings && " with the following toppings:"}
      </p>
      {additionalToppings && (
        <ul>
          {toppingNamesList.map((topping) => (
            <li key={topping}>{topping}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
