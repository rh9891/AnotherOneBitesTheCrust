export type SauceType =
  | "tomato-sauce"
  | "romesco-sauce"
  | "pesto-sauce"
  | "creamy-spinach-sauce"
  | "bbq-sauce";

export type CheeseType =
  | "vegan-cheese"
  | "ricotta-cheese"
  | "mozarella-cheese"
  | "goat-cheese";

export type Ingredients = {
  sauce: SauceType;
  cheese: CheeseType;
  toppings: string[];
};
