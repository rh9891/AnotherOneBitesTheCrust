import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { Ingredients } from "../../Types";
import Header from "../../components/Header";
import PizzaCheese from "../../components/PizzaCheese";
import PizzaSauce from "../../components/PizzaSauce";
import Pepperoni from "../../assets/images/Pepperoni.png";
import Chicken from "../../assets/images/Chicken.png";
import Ham from "../../assets/images/Ham.png";
import Shrimp from "../../assets/images/Shrimp.png";
import Peppers from "../../assets/images/Peppers.png";
import Tomatoes from "../../assets/images/Tomatoes.png";
import SpringOnions from "../../assets/images/SpringOnions.png";
import Mushrooms from "../../assets/images/Mushrooms.png";
import Olives from "../../assets/images/Olives.png";
import Onions from "../../assets/images/Onions.png";
import Pineapple from "../../assets/images/Pineapple.png";
import ShreddedParmesanCheese from "../../assets/images/ShreddedParmesanCheese.png";
import * as Styled from "./Styles";

type CustomizeToppingsProps = {
  ingredients: Ingredients;
  setIngredients: Dispatch<SetStateAction<Ingredients>>;
};

type Topping = {
  id: string;
  label: string;
  image: string;
  className?: string;
};

const toppings: Topping[] = [
  { id: "pepperoni", label: "Papa Don't Pepperoni", image: Pepperoni },
  {
    id: "chicken",
    label: "Pour Some Chicken on Me",
    image: Chicken,
    className: "chicken"
  },
  { id: "ham", label: "Ham After Time", image: Ham, className: "ham" },
  { id: "shrimp", label: "Shrimp Up the Volume", image: Shrimp },
  { id: "peppers", label: "Sweet Peppers O' Mine", image: Peppers },
  { id: "tomatoes", label: "Love Is a Tomato Field", image: Tomatoes },
  {
    id: "spring-onions",
    label: "Where the Spring Onions Have No Name",
    image: SpringOnions
  },
  { id: "mushrooms", label: "With or Without Shrooms", image: Mushrooms },
  {
    id: "olives",
    label: "Addicted to Olive",
    image: Olives,
    className: "olives"
  },
  { id: "onions", label: "Livin' Onion Prayer", image: Onions },
  {
    id: "pineapple",
    label: "Pineapple Fields Forever",
    image: Pineapple
  },
  {
    id: "shredded-parmesan-cheese",
    label: "Parma Chameleon",
    image: ShreddedParmesanCheese
  }
];

export default function CustomizeToppings({ ingredients, setIngredients }: CustomizeToppingsProps) {
  const navigate = useNavigate();

  const handleToppingChange = (topping: string) => {
    setIngredients((prev: Ingredients) => {
      const isToppingSelected = prev.toppings.includes(topping);
      const updatedToppings = isToppingSelected
        ? prev.toppings.filter((t) => t !== topping)
        : [...prev.toppings, topping];

      return { ...prev, toppings: updatedToppings };
    });
  };

  const handleGoBack = () => {
    navigate("/customize-cheese");
  };

  const handleNextPage = () => {
    console.log(ingredients);

    if (ingredients.toppings.length === 0) {
      setIngredients({
        sauce: ingredients.sauce,
        cheese: ingredients.cheese,
        toppings: []
      });
    }
    navigate("/checkout");
  };

  return (
    <Styled.Wrapper>
      <Header />
      <Styled.CustomizationContainer>
        <Styled.Card>
          <Styled.Container>
            <Styled.ImageContainer>
              <PizzaCheese cheese={ingredients.cheese} />
              <AnimatePresence>
                {ingredients.toppings.map((topping) => {
                  const toppingData = toppings.find((t) => t.id === topping);
                  return (
                    <motion.div
                      key={toppingData?.id}
                      initial={{ opacity: 0 }}
                      animate={{ y: 100, opacity: 1 }}
                      exit={{ y: -100, opacity: 0 }}
                      transition={{ duration: 1 }}
                      className={toppingData?.className ?? "toppings"}
                    >
                      <Styled.Image
                        key={toppingData?.id}
                        src={toppingData?.image}
                        alt={toppingData?.label}
                      />
                    </motion.div>
                  );
                })}
              </AnimatePresence>
              <PizzaSauce sauce={ingredients.sauce} />
            </Styled.ImageContainer>
          </Styled.Container>
          <Styled.OptionsContainer>
            <Styled.DirectionContainer>
              <Styled.Title>Top Your Pizza Like a Rockstar</Styled.Title>
              <Styled.Description>
                Turn up the volume and pick your toppings! Each one is a hit
                single, and your pizza is the ultimate chart-topper.
              </Styled.Description>
            </Styled.DirectionContainer>
            <div>
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
            </div>
            <Styled.ButtonContainer>
              <Styled.Button onClick={handleGoBack}>
                Go Back
              </Styled.Button>
              <Styled.Button onClick={handleNextPage}>
                Review Order
              </Styled.Button>
            </Styled.ButtonContainer>
          </Styled.OptionsContainer>
        </Styled.Card>
      </Styled.CustomizationContainer>
    </Styled.Wrapper>
  );
}
